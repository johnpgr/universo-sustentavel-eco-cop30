import { useState, useEffect } from "react"

export default function useGeolocation() {
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
        null
    )

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            })
        }
    }, [])

    return coords
}
