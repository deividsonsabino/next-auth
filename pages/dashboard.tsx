import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
    const { user, signOut, isAuthenticated } = useContext(AuthContext)
    console.log("aaaaaaaaa",signOut);


    return (
        <>
            <h1>Dashboard {user?.email}</h1>

            <button onClick={signOut}>Sign out</button>

            <Can permissions={['metrics.list']}>
                <div>Métricas</div>
            </Can>
        </>
    )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

    return {
        props: {}
    }
})