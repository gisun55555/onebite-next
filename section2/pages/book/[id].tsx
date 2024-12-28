import { useRouter } from "next/router"

export default function page(){

    const router = useRouter()
    console.log(router)
    const {id} = router.query
    const part1 = id ? id[0] :'없음'
    const part2 = id ? id[1] :'없음'
    const part3 = id ? id[2] :'없음'

    return(<div>
        <p>part1 {part1}</p>
        <p>part1 {part2}</p>
        <p>part1 {part3}</p>
    </div>)
}