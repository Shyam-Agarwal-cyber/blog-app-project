import { useEffect, useState } from 'react';
import '../App.css';
import Header from './Header';
import Card from './Card';


const Home = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/blogs').then((res) => {
            return res.json();
        }).then((data) => {
            setBlogData(data)
            console.log(data)
        }).catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <Header />
            <div className='container'>
                {
                    blogData.map(item => (
                        <Card id={item.id} title={item.title} category={item.category} desc={item.desc} likes={item.likes} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home