import React from 'react';
import { PropTypes } from 'prop-types';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ButtonPlay,
    DotGroup,
    Image,
} from 'pure-react-carousel';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
const defaultSlide = require('../../../../public/images/Welcome_Spotlight.jpg');

const Spotlights = ({ spotlights, spotlightsLoading, defaultSlide }) => {
    console.log(defaultSlide, spotlightsLoading);
    const totalSlides = spotlights && spotlights.length;
    const slides =
        spotlights && spotlights.length > 0
            ? spotlights.map((item, index) => {
                  return {
                      index,
                      src: item.img_url,
                      alt: item.img_alt,
                      aria: item.title,
                      link: item.url,
                  };
              })
            : [];
    if (slides.length > 0 && !spotlightsLoading) {
        return (
            <div
                id="spotlights"
                data-testid="spotlights"
                style={{ height: '100%', position: 'relative' }}
                role="region"
                aria-label="Spotlights carousel"
            >
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={totalSlides}
                    step={1}
                    naturalSlideWidth={1967}
                    naturalSlideHeight={721}
                    isPlaying
                    interval={10000}
                    style={{ height: '100%' }}
                >
                    {totalSlides > 1 && (
                        <div
                            style={{
                                width: 36,
                                height: '100%',
                                position: 'absolute',
                                top: 4,
                                left: 4,
                                zIndex: 101,
                            }}
                        >
                            <ButtonBack>
                                <ChevronLeftIcon />
                            </ButtonBack>
                        </div>
                    )}
                    {totalSlides > 1 && (
                        <div
                            style={{
                                width: 36,
                                height: '100%',
                                position: 'absolute',
                                top: 4,
                                right: 0,
                                zIndex: 101,
                            }}
                        >
                            <ButtonNext>
                                <ChevronRightIcon />
                            </ButtonNext>
                        </div>
                    )}
                    {totalSlides > 1 && (
                        <div
                            style={{
                                width: 36,
                                position: 'absolute',
                                bottom: 0,
                                left: 4,
                                zIndex: 101,
                            }}
                        >
                            <ButtonPlay childrenPlaying={<PauseIcon />} childrenPaused={<PlayArrowIcon />} />
                        </div>
                    )}
                    {totalSlides > 1 && (
                        <div
                            style={{
                                width: 200,
                                marginLeft: -100,
                                position: 'absolute',
                                bottom: 10,
                                left: '50%',
                                zIndex: 101,
                                textAlign: 'center',
                            }}
                        >
                            <DotGroup />
                        </div>
                    )}
                    <div
                        style={{
                            zIndex: 99,
                        }}
                    >
                        <Slider>
                            {slides.map((item, index) => {
                                console.log(slides);
                                return (
                                    <Slide index={item.index} key={index}>
                                        <a href={item.link} aria-label={item.aria}>
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                style={{ width: '100%' }}
                                                aria-label={item.aria}
                                            />
                                        </a>
                                    </Slide>
                                );
                            })}
                        </Slider>
                    </div>
                </CarouselProvider>
            </div>
        );
    }
    return null;
};

Spotlights.propTypes = {
    spotlights: PropTypes.array,
    spotlightsLoading: PropTypes.bool,
    defaultSlide: PropTypes.string,
};

Spotlights.defaultProps = {
    spotlightsLoading: false,
    defaultSlide: defaultSlide,
};

export default Spotlights;
