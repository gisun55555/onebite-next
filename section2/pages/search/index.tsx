import { useRouter } from "next/router"

export default function page(){

    const router = useRouter()
    const {q} = router.query
    console.log(router)
    return <h1>Search{q}</h1>
}