import React from 'react';
import HomeCart from './HomeCart';
const Home = () => {
    let data = [
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61ZmVYwYUXL._AC_SY200_.jpg',
            title: 'Sparx mens Sd9039g Sneakers ',
            des: 'Lorem ipsum dolor, sit amet sit amet '
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/61E9BPLm1BL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61ZmVYwYUXL._AC_SY200_.jpg',
            title: 'Sparx mens Sd9039g Sneakers ',
            des: 'Lorem ipsum dolor, sit amet sit amet '
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/61E9BPLm1BL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61ZmVYwYUXL._AC_SY200_.jpg',
            title: 'Sparx mens Sd9039g Sneakers ',
            des: 'Lorem ipsum dolor, sit amet sit amet '
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/61E9BPLm1BL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61ZmVYwYUXL._AC_SY200_.jpg',
            title: 'Sparx mens Sd9039g Sneakers ',
            des: 'Lorem ipsum dolor, sit amet sit amet '
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/61E9BPLm1BL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61ZmVYwYUXL._AC_SY200_.jpg',
            title: 'Sparx mens Sd9039g Sneakers ',
            des: 'Lorem ipsum dolor, sit amet sit amet '
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/61E9BPLm1BL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY200_.jpg',
            title: 'Hero Thorn 24 T Road Bike ',
            des: 'Lorem ipsum dolor, sit amet sit amet  '
        },

    ]
    return (
        <>
            <div className="flex justify-around p-3 m-6 mt-0 bg-slate-300">
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
            </div>
            <div className="flex flex-wrap items-center justify-center p-10 m-6 bg-slate-300">
                {
                    data.map((items) => {
                        const { id, img, title, des } = items
                        return (
                            <span className="w-1/5 p-10 m-4 bg-white rounded-sm cursor-pointer h-80">
                                <img src={img} alt="" />
                                <br />
                                <h3 className="mb-2 text-lg">{title}</h3>
                                <p className="text-sm w-60">{des}</p>
                            </span>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Home;
