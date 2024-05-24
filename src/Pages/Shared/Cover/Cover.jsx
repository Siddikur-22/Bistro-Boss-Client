import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero md:h-[700px] h-full mb-28 " style={{backgroundImage:`url(${img})`}}>
          
                <div className="hero-content text-center bg-white  md:px-56 md:py-16">
                    <div className="max-w-md space-y-3">
                        <h1 className="md:text-5xl text-3xl font-bold uppercase">{title}</h1>
                        <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;