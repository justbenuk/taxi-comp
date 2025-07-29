import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6', className)}>{children}</div>
  )
}

