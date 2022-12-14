import React, { Component, useRef } from 'react';
import Button from '../../components/Button/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { ReactComponent as HeroRight } from '../../assets/images/large-hero.svg';
import { ReactComponent as CertificateIllustrator } from '../../assets/images/certificate-illustrator.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';

import flipreach from '../../assets/images/flipreach.svg';
import amazon from '../../assets/images/amazon.svg';
import flowbase from '../../assets/images/flowbase.svg';
import linkedin from '../../assets/images/linkedin.svg';
import paypal from '../../assets/images/paypal.svg';

import icon11 from '../../assets/images/icon1-1.svg';
import icon12 from '../../assets/images/icon1-2.svg';
import icon13 from '../../assets/images/icon1-3.svg';
import businessImg from '../../assets/images/Business Image.svg';

import icon21 from '../../assets/images/icon2-1.svg';
import icon22 from '../../assets/images/icon2-2.svg';
import icon23 from '../../assets/images/icon2-3.svg';
import icon24 from '../../assets/images/icon2-4.svg';
import icon25 from '../../assets/images/icon2-5.svg';
import personalPlatformImg from '../../assets/images/Personal Platform Image.svg';

import securityPolicy from '../../assets/images/security-policy.svg';

import arrowLeft from '../../assets/images/left.svg';
import arrowRight from '../../assets/images/right.svg';

import information from '../../assets/images/all information.svg';
import mostForms from '../../assets/images/most forms.svg';

import googlePlay from '../../assets/images/google-play.svg';
import appstore from '../../assets/images/appstore.svg';
import getStarted from '../../assets/images/get-started.svg';

import alwaysKnows from '../../assets/images/always-know.svg';
import startIntegration from '../../assets/images/start-integration.svg';


// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import './Home.scss';

import { SCREEN_SIZE } from '../../configurations/configurations';


const businessPlatform = [
    {
        image: icon11,
        title: 'Create forms that suit your organization???s needs and send them to customers',
        description: 'The personal data you submit is captured after one use and stored safely in the app for future use???any time, any form. New information is saved automatically as you complete each form.'
    },
    {
        image: icon12,
        title: 'Eliminate transcription & administrative rework',
        description: 'Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates.'
    },
    {
        image: icon13,
        title: 'Reduce form abandonment rates',
        description: 'Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.'
    },
    {
        image: icon13,
        title: 'Reduce form abandonment rates',
        description: 'Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.'
    },
]

const personalPlatform = [
    {
        image: icon21,
        title: 'Capture, save and use personal information to complete forms and applications',
        description: 'The personal data you submit is captured after one use and stored safely in the app for future use???any time, any form. New information is saved automatically as you complete each form.'
    },
    {
        image: icon22,
        title: 'Share forms and applications with other parties and organizations',
        description: 'Receive auto-completed electronic forms the moment your customer shares it with your organization - No more waiting for hard copies to arrive because Paxform eliminates.'
    },
    {
        image: icon23,
        title: 'Complete simple and complex forms',
        description: 'Forms are a tedious, time-consuming task. With Paxform, even those forms that want to know everything about you are completed in an instant.'
    },
    {
        image: icon24,
        title: "Link your family's data",
        description: 'The personal data you submit is captured after one use and stored safely in the app for future use???any time, any form. New information is saved automatically as you complete each form.'
    },
    {
        image: icon25,
        title: 'Electronically sign documents',
        description: 'Experience a new level of convenience by using your stored signatures to electronically sign your documents.'
    },
]

var home = {
    numberOfComapniesPerView: 5,
    numberOftestimonialsPerView: 3,
    autoplaySpeed: 4000
}
const API_URL = process.env.REACT_APP_API_URL;

export default class Home extends Component {

    testimonials = [];

    constructor(props) {
        super(props);

        this.state = home;
    }

    async componentDidMount() {
        this.testimonials = await this.getTestimonials();
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    async getTestimonials() {
        const response = await fetch(API_URL + 'testimonials2');
        return await response.json();
    }


    handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= SCREEN_SIZE.large) {
            home = {
                numberOfComapniesPerView: 5,
                numberOftestimonialsPerView: 3,
            }
        } else if (screenWidth < SCREEN_SIZE.large && screenWidth >= SCREEN_SIZE.medium) {
            home = {
                numberOfComapniesPerView: 4,
                numberOftestimonialsPerView: 2,
            }
        } else if (screenWidth < SCREEN_SIZE.medium && screenWidth >= SCREEN_SIZE.small) {
            home = {
                numberOfComapniesPerView: 3,
                numberOftestimonialsPerView: 2,
            }
        } else if (screenWidth < SCREEN_SIZE.small) {
            home = {
                numberOfComapniesPerView: 2,
                numberOftestimonialsPerView: 1,
            }
        }
        this.setState(home);
    }

    render() {
        return (
            <main className='home'>
                <section className="hero">
                    <div className='container hero__wrapper'>
                        <div className='hero__content'>
                            <h1 className='hero__title'>Forms<br /> without forms.</h1>
                            <p className='hero__description'>Paxform allows users to securely save and manage their personal data for immediate reference, enabling them to easily sign documents and share information with others.</p>
                            <div className="hero__button">
                                <Button text="Sign Up" type="flat arrow" color="white" />
                                <Button text="How it works" type="outline triangle-right" color="white" />
                            </div>

                        </div>
                        <div className="hero__image">
                            <HeroRight className='hero__image-large' />
                            <CertificateIllustrator className='hero__image-ci' />
                        </div>
                    </div>
                    <div className="bottom_triangle"></div>
                </section>
                <section className='slider'>
                    <div className="container slider__container">

                        <Swiper
                            spaceBetween={30}
                            slidesPerView={home.numberOfComapniesPerView}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 4000,
                            }}
                            modules={[Autoplay]}
                            className="slider__swiper"
                        >
                            <SwiperSlide>
                                <div className="slider__image">
                                    <img src={flowbase} alt="flowbase" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__image">
                                    <img src={flipreach} alt="flipreach" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__image">
                                    <img src={amazon} alt="amazon" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__image">
                                    <img src={linkedin} alt="linkedin" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__image">
                                    <img src={paypal} alt="paypal" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className="platform">
                    <div className="container platform__container">
                        <div className="platform__top">
                            <div className="platform__top-left">

                                <p className="platform__name">BUSINESS PLATFORM</p>
                                <h2 className='platform__title'>Your business information at your fingertips</h2>
                            </div>
                            <div className="platform__top-right">
                                <Button type="outline arrow" text="Learn more about Business" />
                            </div>

                        </div>
                        <div className="business_platform__content">
                            <div className="business_platform__content-grid">
                                {businessPlatform.map((item, index) => {
                                    return (
                                        <div className="business_platform__content-item" key={index}>
                                            <div className="business_platform__content-item-image">

                                                <img src={item.image} alt="icon" />
                                            </div>
                                            <h3 className="business_platform__content-item-title">{item.title}</h3>
                                            <p className="business_platform__content-item-description">{item.description}</p>
                                        </div>
                                    )
                                })}
                                <div className="business_platform__image">
                                    <img src={businessImg} alt="Business" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_triangle bottom_triangle--dark-blue"></div>

                </section>

                <section className="platform background--dark-blue platform__title--white">
                    <div className="container platform__container">
                        <div className="platform__top">
                            <div className="platform__top-left">

                                <p className="platform__name platform__name--green">PERSONAL PLATFORM</p>
                                <h2 className='platform__title '>Your personal information at your fingertips</h2>
                            </div>
                            <div className="platform__top-right">
                                <Button type="outline arrow" text="Learn more about Business" />
                            </div>

                        </div>
                        <div className="personal_platform__content">
                            <div className="business_platform__content-grid">
                                {personalPlatform.map((item, index) => {
                                    return (
                                        <div className="personal_platform__content-item" key={index}>
                                            <div className="personal_platform__content-item-image">

                                                <img src={item.image} alt="icon" />
                                            </div>
                                            <h3 className="personal_platform__content-item-title">{item.title}</h3>
                                            <p className="personal_platform__content-item-description">{item.description}</p>
                                        </div>
                                    )
                                })}
                                <div className="personal_platform__image">
                                    <img src={personalPlatformImg} alt="Personel" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom_triangle bottom_triangle--light-blue"></div>

                </section>

                <section className="security_policy">
                    <div className="container security_policy__container">
                        <div className="security_policy__image">
                            <img src={securityPolicy} alt="security policy" />
                        </div>
                        <div className="security_policy__content">
                            <p className='security_policy__name'>SECURITY POLICY</p>
                            <h2 className="security_policy__title">Only you can access your data. Not us???Not anyone else.</h2>
                            <p className="security_policy__description">Paxform will never share your data with anyone. What???s more, no one at Paxform can view or access your information. Our mission is to apply end-to-end encryption to every piece of information stored, protecting the data of organizations and individuals at all stages and at all costs.</p>
                            <p className="security_policy__description">Only you decide which parties can view what pieces of information. Our security architecture ensures that personal data is decentralized, guaranteeing that the point of access in a potential security threat will not reveal any information.</p>

                            <div className="security_policy__button">
                                <Button type="outline arrow" text="Learn more" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom_triangle bottom_triangle--white"></div>
                </section>

                <section className="testimonial">
                    <TestimonialSwiper values={this.testimonials} />
                    <div className="bottom_triangle bottom_triangle--blue"></div>
                </section>

                <section className='simplify'>
                    <div className="container simplify__container">
                        <h2 className='simplify__title'>We simplify your work</h2>
                        <div className="simplify_flexbox">
                            <div className="simplify_flexbox__content">
                                <h3 className="simplify_flexbox__content-title">Find all your information in one place</h3>
                                <p>It can be a hassle looking for where you have stored different information. With Paxform, you can keep all your information like biodatas, signatures and documents, including your contacts, all in one app.</p>

                                <p> Better yet, all the data is encrypted and only you and the person you share it with can have access to it.</p>
                            </div>
                            <div className="simplify_flexbox__image">
                                <img src={information} alt="all information" />
                            </div>
                        </div>

                        <div className="simplify_flexbox rtl">
                            <div className="simplify_flexbox__content ltr">
                                <h3 className="simplify_flexbox__content-title">Most forms are too complex</h3>
                                <p>Completing forms manually is an incredibly long process, prone to typos and form abandonment that often result in delays. To make matters worse, nearly 30% of people have difficulties understanding basic forms.</p>

                                <p>With Paxform, you fill in your data once and it will automatically match that data no matter which form you are filling in. Say goodbye to manually inputting the same data over and over again.</p>
                            </div>
                            <div className="simplify_flexbox__image">
                                <img src={mostForms} alt="most forms" />
                            </div>
                        </div>
                    </div>

                    <div className="bottom_triangle bottom_triangle--light-blue"></div>
                </section>

                <section className='get_started'>
                    <div className="container get_started__container">
                        <div className="get_started__content">
                            <h1>Get started for free. <br />
                                Download from your app store.</h1>
                            <div className="get_started__buttons">
                                <img src={googlePlay} alt="google play" />
                                <img src={appstore} alt="app store" />
                            </div>
                        </div>
                        <div className="get_started__image">
                            <img src={getStarted} alt="get started" />
                        </div>
                    </div>
                </section>

                <section className="love_to_hear">
                    <div className="container love_to_hear__container">

                        <div className="love_to_hear__box-left">
                            <div className="love_to_hear__box-left-item">
                                <div className="love_to_hear__box-left-item-image">

                                    <img src={alwaysKnows} alt="always know" />
                                </div>
                                <h3>Always know what you pay</h3>
                                <p>Experience a new level of convenience by using your stored signatures to electronically sign your documents.</p>
                                <a href="https://">
                                    <span className='span--hover'>Learn more</span><ArrowRight />
                                </a>
                            </div>
                            <div className="love_to_hear__box-left-item">
                                <div className="love_to_hear__box-left-item-image">

                                    <img src={startIntegration} alt="start integration" />
                                </div>
                                <h3>Start your integration</h3>
                                <p>Experience a new level of convenience by using your stored signatures to electronically sign your documents.</p>
                                <a href="https://">
                                    <span className='span--hover'>Learn more</span><ArrowRight />
                                </a>
                            </div>
                        </div>
                        <div className="love_to_hear__box-right">
                            <h1>We???d love to hear from you!</h1>
                            <p>Explore Stripe Payments, or create an account instantly and start accepting payments. You can also contact us to design a custom package for your business.</p>

                            <p>Explore Stripe Payments, or create an account instantly and start accepting payments.</p>

                            <Button type="outline arrow" text="Contact Us" />
                        </div>
                    </div>

                    <div className="bottom_triangle bottom_triangle--footer"></div>
                </section>

            </main>

        )
    }
}

const TestimonialSwiper = (data) => {
    const swiperRef = useRef();

    const testimonials = data.values;

    return (
        <div className="container testimonial__container">
            <p className="testimonial__name">TESTIMONIAL</p>
            <h2 className="testimonial__title">What people are saying about Paxform</h2>
            <div className="testimonial__swiper">

                <Swiper
                    slidesPerView={home.numberOftestimonialsPerView}
                    spaceBetween={24}
                    slidesPerGroup={home.numberOftestimonialsPerView}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    autoHeight={false}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="testimonial__slider"
                >
                    {testimonials.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial_card">
                                    <div className="testimonial_card__description" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                    <div className="testimonial_card__name-box">
                                        <h3 className="testimonial_card__name">{item.title.rendered}</h3>
                                        <p className="testimonial_card__position">{item.acf.client_bio}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
                <div className="slider__buttons--left">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <img src={arrowLeft} alt="arrow left" />
                    </button>
                </div>
                <div className="slider__buttons--right">
                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <img src={arrowRight} alt="arrow right" />
                    </button>
                </div>
            </div>
        </div>
    )
}