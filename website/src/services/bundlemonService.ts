import { generateDiffReport, Status } from 'bundlemon-utils';
import { BUNDLEMON_SERVICE_URL } from '../consts/config';

import type { CreateProjectResponse, Report, BaseCommitRecordResponse, CommitRecord } from 'bundlemon-utils';
import FetchError from './FetchError';
import { CommitRecordsQueryResolution } from '@/consts/commitRecords';
import { removeEmptyValuesFromObject } from '@/utils/objectUtils';

const baseUrl = BUNDLEMON_SERVICE_URL + '/v1';

type FetchParams = Parameters<typeof fetch>;

const baseFetch = async <R>(input: FetchParams[0], init: FetchParams[1], errorMsg?: string): Promise<R> => {
  const res = await fetch(baseUrl + input, {
    ...init,
    headers: {
      ...init?.headers,
      'x-api-client-name': 'bundlemon-website',
      'x-api-client-version': '1.0.0',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    let message = '';
    try {
      const j = await res.clone().json();

      message = j.message;
    } catch (e) {
      message = await res.clone().text();
    }

    throw new FetchError(`${errorMsg ?? 'Failed to make request'}: ${message}`, res.status);
  }

  return await res.json();
};

export const createProject = async () => {
  return await baseFetch<CreateProjectResponse>(
    '/projects',
    { method: 'POST', body: '{}' },
    'Failed to create project'
  );
};

export const getReport = async (projectId: string, commitRecordId: string): Promise<Report> => {
  const res = await baseFetch<BaseCommitRecordResponse>(
    `/projects/${projectId}/commit-records/${commitRecordId}/base`,
    {
      method: 'GET',
    },
    'Failed to fetch report'
  );

  return generateReport(res);
};

export interface GetCommitRecordsQuery {
  subProject?: string;
  branch: string;
  resolution: CommitRecordsQueryResolution;
}

export const getCommitRecords = async (projectId: string, query: GetCommitRecordsQuery): Promise<CommitRecord[]> => {
  const res = await baseFetch<CommitRecord[]>(
    `/projects/${projectId}/commit-records?${new URLSearchParams(removeEmptyValuesFromObject(query)).toString()}`,
    {
      method: 'GET',
    },
    'Failed to fetch commit records'
  );

  return res.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());
};

export const getSubprojects = async (projectId: string): Promise<string[]> => {
  const res = await baseFetch<string[]>(
    `/projects/${projectId}/subprojects`,
    {
      method: 'GET',
    },
    'Failed to fetch sub-projects'
  );

  return res.sort((a, b) => a.localeCompare(b));
};

export const login = async (code: string) => {
  return await baseFetch(
    '/auth/login',
    { method: 'POST', body: JSON.stringify({ provider: 'github', code }), credentials: 'include' },
    'Failed to login'
  );
};

export const logout = async () => {
  return await baseFetch('/auth/logout', { method: 'POST', body: '{}', credentials: 'include' }, 'Failed to logout');
};

export const getMe = async () => {
  return await baseFetch('/users/me', { method: 'GET', credentials: 'include' }, 'Failed to get user');
};

export const approveCommitRecord = async (projectId: string, commitRecordId: string): Promise<Report> => {
  const res = await baseFetch<BaseCommitRecordResponse>(
    `/projects/${projectId}/commit-records/${commitRecordId}/approve`,
    { method: 'POST', body: JSON.stringify({ reason: undefined }), credentials: 'include' },
    'Failed to approve'
  );

  return generateReport(res);
};

const generateReport = ({ record, baseRecord }: BaseCommitRecordResponse): Report => {
  const diffReport = generateDiffReport(
    { files: record.files, groups: record.groups },
    baseRecord ? { files: baseRecord.files, groups: baseRecord.groups } : undefined
  );

  if (record.approvers?.length) {
    diffReport.status = Status.Pass;
  }

  return { ...diffReport, metadata: { record, baseRecord } };
};
