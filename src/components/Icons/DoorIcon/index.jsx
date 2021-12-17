import { Base } from './styles'

export function DoorIcon(props) {
  const color = '#C4C4CC'

  return (
    <Base {...props}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6667 25.3306V10.004C14.6667 9.08398 14.1933 8.22931 13.4133 7.74264L8.08 4.40931C6.304 3.29998 4 4.57598 4 6.67064V21.996C4 22.916 4.47333 23.7706 5.25333 24.2573L10.5867 27.5906C12.3627 28.7013 14.6667 27.424 14.6667 25.3306Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 14.6667H20"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.6667 12L20 14.6667L22.6667 17.3333"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6667 25.3334H20.0001C21.4734 25.3334 22.6667 24.14 22.6667 22.6667V21.3334"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.6667 8V6.66667C22.6667 5.19333 21.4734 4 20.0001 4H6.66675"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Base>
  )
}
