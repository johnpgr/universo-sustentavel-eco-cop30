import { Card, CardContent } from "~/components/ui/card"
import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router"

interface NavButtonProps {
    href: string
    icon: ReactNode
    title: string
    description: string
}

export function NavButton({ href, icon, title, description }: NavButtonProps) {
    return (
        <Link to={href} className="block">
            <Card className="border-green-200 hover:border-green-400 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        {icon}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium text-green-800">{title}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-green-500" />
                </CardContent>
            </Card>
        </Link>
    )
}
