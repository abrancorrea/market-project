import React from 'react';
import { Icon, IconButton, Image } from '@chakra-ui/react';
import slide1 from '../../../assets/img/grocery-slider-img-one.jpg';
import slide2 from '../../../assets/img/grocery-slider-img-two.jpg';
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons';
import Carousel from 'nuka-carousel';

const Slider = () => {
  return (
    <>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <IconButton
            ml="15px"
            bg="white"
            size="30px"
            isRound
            _focus={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px !important' }}
            _hover={{ backgroundColor: 'white !important' }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px"
            onClick={previousSlide}
            icon={<Icon fontWeight="light" style={{ width: 30, height: 30 }} as={UilAngleLeft} />}
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <IconButton
            mr="15px"
            bg="white"
            size="30px"
            isRound
            _focus={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px !important' }}
            _hover={{ backgroundColor: 'white !important' }}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px"
            onClick={nextSlide}
            icon={<Icon w="30px" h="30px" as={UilAngleRight} />}
          />
        )}
        autoplayReverse={true}
        wrapAround={true}
        renderBottomCenterControls={false}
      >
        <Image src={slide1} />

        <Image src={slide2} />
      </Carousel>
    </>
  );
};

export default Slider;
