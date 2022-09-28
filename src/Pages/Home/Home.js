import React from 'react';
import auth from '../../firebase.init';
import ComingSoon from '../ComingSoon/ComingSoon';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Subscription from './Subscription/Subscription';
import { useAuthState } from "react-firebase-hooks/auth";
import Testimonials from './Testimonials/Testimonials';
import HomeBanner from './HomeBanner/HomeBanner';
import OurCustomers from './OurCustomers/OurCustomers';
import Awards from './Awards/Awards';
import FAQ from './Awards/FAQ/FAQ';
const Home = () => {
    const hoursMinSecs = { days: 29, hours: 24, minutes: 60, seconds: 60 }
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            {/* <Banner></Banner> */}
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            {
                user && <ContactUs></ContactUs>
            }
            {
                user && <Subscription></Subscription>
            }
            <FAQ></FAQ>
            <Awards></Awards>
            <ComingSoon hoursMinSecs={hoursMinSecs}></ComingSoon>
            <OurCustomers></OurCustomers>
            <Footer></Footer>
        </div>
    );
};

export default Home;