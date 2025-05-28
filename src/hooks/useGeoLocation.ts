import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

type LocationData = {
    city: string,
    region: string,
}
export default function useGeoLocation(): LocationData {
    const [locationData, setLocationData] = useState<LocationData>({
        city: '',
        region: '',
    })
    useEffect(() => {
        getLocation();
    }, []);

    async function getLocation() {
        const res = await axios.get("http://ip-api.com/json");
        if (res.status === 200)
            setLocationData(res.data)
    }

    return {
        city: locationData?.city,
        region: locationData?.region,
    }
}