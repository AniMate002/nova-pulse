import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules'
import { useAppSelector } from '../../redux/hook';
import { Tilt } from 'react-tilt';
import { useState } from 'react';
import gamesReducer, { cardI } from '../../redux/gamesReducer';


const coverFLowSettings = {
    rotate: 45,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: true
}

export const getRenderedTags = (tags: Array<string>) => {
    return tags.map((tag: string) => {
        return (
            <p className='text-white bg-transparent border-[1px] border-white  rounded-full uppercase 
            text-[6px] px-1 py-0 lowercase
            sm:text-sm sm:px-8 sm:py-4
            '>{tag}</p>
        )
    })
}

export const getRenderedPlatforms = (platforms: Array<string>) => {
    return platforms.map(platform => {
        return <p className='text-white  font-semibold
        text-[8px]
        sm:text-xl
        '><i className={platform}></i></p>
    })
}

const GamesSwiper = () => {
    const [activeSlide, setActiveSlide] = useState<number>(1)
    const  { cards } = useAppSelector(state => state.games)



    const renderedGamesSliders = cards.slice(4, 7).map(game => {
        return (
            <SwiperSlide className={`games--page--games--slide--${activeSlide+1}`}>
                <div className='relative w-full h-full'>
                    <div className='w-full h-full absolute bg-black opacity-[0.4] z-10'></div>
                    <img src={game.image} alt={game.image} className=' min-w-[100%] rounded-xl border-2 border-violet-800' />
                    <div className='absolute w-full h-full z-20 top-0 left-0 
                    px-2 py-2
                    sm:px-10 sm:py-10
                    '>
                        <div className='rounded-full bg-white  text-violet-800 font-semibold w-fit
                        px-2 py-1 text-[8px]
                        sm:px-8 sm:py-4 sm:text-base
                        '>featured</div>
                        <h2 className='text-center mt-[15%] text-white tracking-widest  font-bold
                        text-sm
                        sm:text-7xl
                        '>{game.title}</h2>
                        <div className='absolute 
                        bottom-2
                        sm:bottom-10
                        '>
                            <div className=' flex gap-4 

                            mb-1 ml-1
                            sm:mb-10 sm:ml-4
                            '>
                                {getRenderedPlatforms(game.platforms)}
                            </div>
                            <div className='flex  flex-wrap
                            gap-0
                            sm:gap-4
                            '>
                                {getRenderedTags(game.tags)}
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return (
            <Swiper className='w-[100vw] ' speed={1200} modules={[EffectCoverflow]} freeMode={true} grabCursor={true} effect='coverflow' coverflowEffect={coverFLowSettings}  slidesPerView={1.4} spaceBetween={50} centeredSlides={true} initialSlide={1} loop={true}>
                {renderedGamesSliders}
            </Swiper>
    );
}
 
export default GamesSwiper;