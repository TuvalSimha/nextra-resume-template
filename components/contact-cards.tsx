import { ReactElement } from "react"
import { ContactCard } from "./contact-card"
import NextLink from "next/link"

export function ContactCards({
  items,
}: {
  items: {
    icon: ReactElement
    title: string
    description?: string
    link: string
  }[]
}) {
  return (
    <div className="grid grid-cols-2 mt-6 gap-4">
      {items.map(
        ({
          icon: Icon,
          title,
          link,
          description = link.replace(/^https?:\/\//, ""),
        }) => {
          const isExternal = link.startsWith("https://")
          return (
            <ContactCard
              key={title}
              as={isExternal ? "a" : NextLink}
              href={link}
              className={
                `flex flex-col items-center ${isExternal ? "relative after:content-['_↗'] after:font-sans after:absolute after:right-4 after:top-4" : ""}`
              }
            >
              {typeof Icon === "function" ? <Icon className="h-6" /> : Icon}
              <b className="mt-4 mb-2 text-lg text-center">{title}</b>
              <span className="text-xs md:text-sm text-center break-all">
                {description}
              </span>
            </ContactCard>
          )
        },
      )}
    </div>
  )
}
