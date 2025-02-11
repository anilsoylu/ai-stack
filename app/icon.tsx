import { ImageResponse } from "next/og"

const ICON_SIZE = {
  width: 192,
  height: 192,
} as const

export const size = ICON_SIZE
export const contentType = "image/png" as const

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E293B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width={ICON_SIZE.width}
          height={ICON_SIZE.height}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="rocket">
            {/* Roket gövdesi */}
            <path d="M16 6l-4 12h8z" fill="#fff" />
            {/* Pencere */}
            <circle cx="16" cy="12" r="2" fill="#60A5FA" />
            {/* Kanatlar */}
            <path d="M12 18l-2 4h12l-2-4z" fill="#fff" />
            {/* Ateş */}
            <path d="M14 22h4l-2 4z" fill="#F59E0B">
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    ),
    size
  )
}
