
import Title from "./Title"
import FlatItem from "./FlatItem"
import {getAllProperties} from "../services/property"
import { useState,useEffect } from "react"

const FlatList = () => {
    const [properties,setProperties] = useState([])
    useEffect(()=>{
        getAllProperties().then(res=>{
            setProperties(res.data)
        })
    },[])
    const title = {
        text: "عقارات للبيع",
        description: "من كل المحافاظات"
    }
    console.log(properties)
    return (
        <section className="section-all-re">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    {
                        properties.map(property =>(<div>
                        <FlatItem slug={property._id} property={property}/>
                        </div>))
                    }
                    
                    {/* <FlatItem slug="lorem-ipsum-2" />
                    <FlatItem slug="lorem-ipsum-3" />
                    <FlatItem slug="lorem-ipsum-4" />
                    <FlatItem slug="lorem-ipsum-5" />
                    <FlatItem slug="lorem-ipsum-6" />   */}
                </div>
            </div>
        </section>
    )

}

export default FlatList;