import { useState, useEffect } from "react";

import {copy, linkIcon, loader, tick} from '../assets';
import { useLazyGetSummaryQuery } from "../services/article";

export default function Demo() {
    const [article, setArticle] = useState({
        url: '',
        summary: ''
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copiedIcon, setCopiedIcon] = useState({item: '', state: false});

    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    useEffect(() => {
        const localArticles = JSON.parse(localStorage.getItem('articles'));

        if(localArticles){
            setAllArticles(localArticles);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Submitted');
        setArticle({...article, url:''});

        const {data} = await getSummary({articleUrl: article.url});

        if(data?.summary){
            const newArticle = {...article, summary: data.summary};
            const updatedAllArticles = [...allArticles, newArticle]

            setArticle(newArticle);
            setAllArticles(updatedAllArticles);

            localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
        }
    }

    const handleCopy = ({copyUrl, item}) => {
        setCopiedIcon({item: item, state: true});
        navigator.clipboard.writeText(copyUrl);

        setTimeout(() => {
            setCopiedIcon({item: '', state: false});
        }, 1500)
    }


  return (
    <section className="w-full mt-16 max-w-xl">
        {/* Search */}
        <div className="w-full flex flex-col gap-2">
            <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
                
                <input type="url" placeholder="Enter a value" value={article.url} onChange={(e) => setArticle({...article, url: e.target.value})} required className="url_input peer" />

                <button
                    type="submit"
                    className="submit_btn
                    peer-focus:border-gray-700
                    peer-focus:text-gray-700">
                    ,'
                </button>
            </form>

            {/* Browse URL History */}
            <div className="flex  flex-col gap-1 max-h-60 overflow-y-auto">
                {allArticles.map((item, index) => {
                    const copyUrl = item.url;
                    return (
                        <div
                            key={`link-${index}`}
                            className="link_card"
                        >
                            <div className="copy_btn" onClick={() => handleCopy({copyUrl, item})}>
                                <img 
                                    src={copiedIcon.item == item && copiedIcon.state == true ? tick : copy}
                                    alt="copy_icon"
                                    className="w-[40%] h-[40%] object-contain"
                                />
                            </div>
                            <p className="flex-1 font-satoshi text-orange-700 font-medium text-sm truncate cursor-pointer"
                            onClick={() => setArticle(item)}>
                                {item.url}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>

        {/* Display Result */}
        <div className="w-full my-10 flex justify-center items-center">
            {isFetching ? (
                <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
            ) : error ? (
                <p className="font-inter font-bold text-black text-center">
                    Well, that wasn't supposed to happen.
                    <br />
                    You may try again.
                    <span className="font-satoshi font-normal text-gray-700">
                        {error?.data?.error}
                    </span>
                </p>
            ) : (
                article.summary && (
                    <div className="flex flex-col gap-3">
                        <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                            Article <span className="orange_gradient">Summary</span>
                        </h2>
                        <div className="summary_box">
                            <p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    </section>
  )
}
