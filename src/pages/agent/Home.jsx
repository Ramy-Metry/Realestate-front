import React from "react"
import TeamList from "../../components/TeamList"
// import References from "./References"
import Subscribe from "../../components/Subscribe"
// import BestFlatList from "./BestFlatList"
import FlatList from "../../components/FlatList"
import Banner from "../../components/Banner"

const Home=()=>{
    return (
        <div>
            <Banner/>
            <FlatList/>
            {/* <BestFlatList/> */}
            <Subscribe/>
            <TeamList/>
            {/* <References/> */}
        </div>
    )
}

export default Home;