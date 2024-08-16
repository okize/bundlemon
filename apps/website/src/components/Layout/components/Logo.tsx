const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 640"
    width="50"
    height="50"
    {...props}
  >
    <defs>
      <path d="M23.7 438.51l248.89 142.22V296.3L23.7 154.08v284.43z" id="a" />
      <path d="M343.69 331.85l106.67-60.95" id="b" />
      <path d="M272.59 11.86L23.7 154.08 272.59 296.3v284.43l248.88-142.22V154.08L272.59 11.86z" id="c" />
      <path d="M272.59 580.73l106.66-59.25 142.22-82.97V154.08L272.59 296.3v284.43z" id="d" />
      <path
        d="M497.77 391.11c-65.46 0-118.52 53.06-118.52 118.51 0 65.46 53.06 118.52 118.52 118.52 65.45 0 118.51-53.06 118.51-118.52 0-65.45-53.06-118.51-118.51-118.51z"
        id="e"
      />
      <path d="M201.48 379.26l-82.96-47.41v-123.6l82.96 47.41v123.6z" id="f" />
      <path d="M284.43 106.67l82.97 47.41 71.26-47.31-82.79-47.33-71.44 47.23z" id="g" />
      <path d="M308.14 189.63l-82.96-47.4-106.66 66.02 82.96 47.41 106.66-66.03z" id="h" />
      <path
        d="M444.48 260.61c-10.67 6.1-96 54.86-106.66 60.95-5.68 3.25-7.66 10.49-4.4 16.18 2.1 3.68 6.03 5.96 10.27 5.96 2.08.02 4.13-.52 5.93-1.56 10.67-6.1 96-54.86 106.66-60.95 5.67-3.27 7.62-10.5 4.37-16.17-3.25-5.68-10.49-7.65-16.17-4.41z"
        id="i"
      />
      <path
        d="M533.32 154.08c0-1.05-.14-2.09-.42-3.1-.13-.4-.29-.8-.48-1.18-.19-.57-.42-1.13-.69-1.66-.25-.41-.59-.76-.88-1.19-.3-.45-.63-.88-.99-1.29-.38-.32-.77-.62-1.19-.89-.4-.35-.83-.69-1.28-.99-24.88-14.22-223.99-128-248.88-142.22a11.862 11.862 0 00-11.76 0c-24.88 14.22-223.99 128-248.88 142.22-.45.3-.87.64-1.28.99-.41.27-.81.57-1.18.89-.36.41-.7.84-1 1.29-.28.4-.63.74-.88 1.19-.27.53-.5 1.09-.68 1.66-.19.38-.35.78-.49 1.18-.31 1.01-.48 2.05-.51 3.1v284.43c-.01 4.25 2.25 8.17 5.93 10.29 16.58 9.48 99.51 56.86 248.79 142.15.07.04.12.07.13.07.57.3 1.16.54 1.77.74.36.13.69.33 1.06.42.99.27 2.02.4 3.06.4 1.01 0 2.02-.13 2.99-.39.34-.08.64-.27.98-.39.61-.18 1.21-.42 1.79-.71 9.26-5.15 83.4-46.33 92.66-51.48 16.54 70.03 86.71 113.41 156.75 96.87 70.03-16.53 113.41-86.71 96.87-156.74-10.86-46.03-45.81-82.55-91.31-95.43V154.08zm-307.65 2.02l59.94 34.26-80.51 53.67-59.95-34.25 80.52-53.68zm-75.55 88.94l39.5 22.58v91.25l-59.25-33.89v-91.22l19.75 11.28zm216.8-104.88l-59.88-34.22 49.28-32.58 59.78 34.16-49.18 32.64zm-33.65-79.97c-33.23 21.97-51.68 34.17-55.37 36.61-5.46 3.62-6.94 10.98-3.32 16.43a11.88 11.88 0 003.97 3.72c8.29 4.74 74.66 42.66 82.96 47.4 3.89 2.23 8.71 2.07 12.44-.41 4.35-2.89 26.08-17.31 65.19-43.27l58.44 33.41-224.99 128.56-44.48-25.45c51.96-34.65 80.83-53.9 86.61-57.74 5.44-3.64 6.91-11 3.28-16.44-1.02-1.53-2.39-2.8-3.98-3.71-8.3-4.74-74.67-42.67-82.96-47.41-3.9-2.23-8.72-2.06-12.46.43-6.43 4.29-38.58 25.72-96.46 64.3L47.6 154.08 272.59 25.51l60.68 34.68zM106.66 215.14v116.71c0 4.24 2.26 8.17 5.93 10.29 8.3 4.74 74.66 42.66 82.96 47.4 5.67 3.28 12.92 1.33 16.19-4.33 1.04-1.81 1.59-3.86 1.59-5.95V276.08l47.4 27.09v257.18L35.55 431.64V174.5l71.11 40.64zm177.78 88.03l150.12-85.78 75.06-42.89v205.36c-3.91-.35-7.85-.6-11.85-.6-71.97.08-130.29 58.4-130.37 130.36 0 1.6.18 3.16.24 4.74-5.55 3.09-33.28 18.49-83.2 46.23V303.17zM391.1 509.62c0-58.9 47.76-106.66 106.67-106.66 58.9 0 106.66 47.76 106.66 106.66-.07 58.88-47.79 106.6-106.66 106.67-58.91 0-106.67-47.76-106.67-106.67z"
        id="j"
      />
      <path
        d="M499.29 505.14c-9.2 19.53-16.9 35.5-17.11 35.5-.22 0-7.13-10.69-15.48-23.74-10.48-16.47-15.68-24.03-17.18-24.95-2.92-1.64-9.12-1.64-11.9.07-1.43.92-4.64 5.56-9.91 14.26-.52.86-3.11 5.19-7.78 12.97h-36.86V541c14.21-.13 22.1-.2 23.67-.22 21.82-.21 23.89-.28 25.88-1.57 1.36-.85 3.93-4.27 6.71-8.91 2.56-4.13 4.77-7.27 4.99-6.91.21.35 7.34 11.48 15.75 24.67 10.77 16.82 15.97 24.45 17.54 25.45 3.07 1.85 8.99 1.85 12.12-.14 2.78-1.72.57 2.63 26.95-52.91 1.26-2.65 7.53-15.94 18.83-39.85 1.07 1.88 1.66 2.93 1.78 3.14 1 1.64 7.63 13.97 14.76 27.3 14.68 27.38 14.18 26.45 16.89 28.24 1.86 1.21 3.85 1.35 25.03 1.35h22.96v-21.39h-17.61l-17.69-.07-17.25-32.23c-21.53-40.06-21.17-39.42-23.74-40.78-3.07-1.57-9.13-1.35-11.98.43-2.64 1.71-2.28 1-29.37 58.54z"
        id="k"
      />
    </defs>
    <use xlinkHref="#a" fill="#ea9d2d" />
    <use xlinkHref="#a" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    <use xlinkHref="#b" fillOpacity="0" />
    <use xlinkHref="#b" fillOpacity="0" stroke="#000" strokeWidth="2" />
    <use xlinkHref="#c" fill="#fbb540" />
    <use xlinkHref="#c" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    <use xlinkHref="#d" fill="#f7ba61" />
    <use xlinkHref="#d" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    <use xlinkHref="#e" fill="#03cc00" />
    <use xlinkHref="#e" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    <use xlinkHref="#f" fill="#d9d9d9" />
    <use xlinkHref="#f" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    <g>
      <use xlinkHref="#g" fill="#f0f0f0" />
      <use xlinkHref="#g" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    </g>
    <g>
      <use xlinkHref="#h" fill="#f0f0f0" />
      <use xlinkHref="#h" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    </g>
    <g>
      <use xlinkHref="#i" />
      <use xlinkHref="#i" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    </g>
    <g>
      <use xlinkHref="#j" />
      <use xlinkHref="#j" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    </g>
    <g>
      <use xlinkHref="#k" />
      <use xlinkHref="#k" fillOpacity="0" stroke="#000" strokeOpacity="0" />
    </g>
  </svg>
);

export default Logo;
