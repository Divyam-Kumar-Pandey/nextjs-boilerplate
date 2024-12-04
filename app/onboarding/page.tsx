'use client';

import ContactInput from '@/components/onboarding_form/ContactInput';
import NavigationButtons from '@/components/onboarding_form/NavigationButtons';
import ProgressBar from '@/components/onboarding_form/ProgressBar';
import SelectDropdownInput from '@/components/onboarding_form/SelectDropdownInput';
import ShortAnsInput from '@/components/onboarding_form/ShortAnsInput';
import SingleChoiceInput from '@/components/onboarding_form/SingleChoiceInput';
import TimeInput from '@/components/onboarding_form/TimeInput';
import Link from 'next/link';
import React, { MouseEvent, useEffect, useState } from 'react';

const sections = ['welcome', 'personalDetails', 'timeSlot'];

interface FormData {
    name: string;
    phone: string;
    email: string;
    flatNumber: string;
    society: string;
    time: string;
    refferer: string;
    numberOfVehicles: string;
}

const emptyFormData: FormData = {
    name: '',
    phone: '',
    email: '',
    flatNumber: '',
    society: '',
    time: '',
    refferer: '',
    numberOfVehicles: ''
}

const societyOptions = [
    { value: 'AH', label: 'Akme Harmony (AH)' },
    { value: 'BZ', label: 'Bren Zahara (BZ)' },
    { value: 'PKG', label: 'Prestige - Kew Gardens (PKG)' },
    { value: 'PSW', label: 'Purva Skywood (PSW)' },
    { value: 'PS', label: 'Purva Sunshine (PS)' },
    { value: 'RJ-I', label: 'Rohan Jharoka Phase 1 (RJ-I)' },
    { value: 'SJRR', label: 'SJR Redwood (SJRR)' },
    { value: 'SJRW', label: 'SJR Watermark (SJRW)' },
    { value: 'SP', label: 'Sobha Palladian (SP)' },
    { value: 'SF', label: 'Springfields Apartments (SF)' },
    { value: 'PF', label: 'Prestige Ferns Residency (PF)' },
    { value: 'SNNRE', label: 'SNN Raj Etternia (SNNRE)' },
    { value: 'PR', label: 'Purva Riviera (PR)' },
    { value: 'PW', label: 'Purva Whitehall (PW)' },
    { value: 'SJRV', label: 'SJR verity (SJRV)' },
    { value: 'SCWV', label: 'SCW Villaments (SCWV)' },
    { value: 'BL', label: 'Buildafina Lumos (BL)' },
    { value: 'BG', label: 'Bhuvana Greens (BG)' },
    { value: 'EH', label: 'Emmanuel Heights (EH)' },
    { value: 'RJ-2', label: 'Rohan Jharoka Phase 2 (RJ-2)' },
    { value: 'AGP', label: 'Astro Green Park Regency (AGP)' },
    { value: 'SCWT', label: 'SCW Towers (SCWT)' },
    { value: 'CP', label: 'Confident Phoenix (CP)' },
    { value: 'PSD', label: 'Purva Skydale (PSD)' },
    { value: 'RI', label: 'Rohan Iksha (RI)' },
    { value: 'BEW', label: 'Bren Edge Waters (BEW)' },
    { value: 'PFS', label: 'Purva Fountain Square (PFS)' },
    { value: 'RA', label: 'Royal Avenue Residency (RA)' },
    { value: 'SS', label: 'Salarpuria Sanctity (SS)' },
    { value: 'EMS', label: 'Estella Maple Square (EMS)' },
    { value: 'NDP', label: 'ND Passion (NDP)' },
    { value: 'HG', label: 'Haryanvi Orchid Lake View (HG)' },
    { value: 'APR', label: 'Adarsh Palm Retreat (APR)' },
    { value: 'DSRW', label: 'DSR Woodwinds (DSRW)' },
    { value: 'VRRF', label: 'VRR Fortuna (VRRF)' },
    { value: 'SRP', label: 'Sobha Royal Pavilion (SRP)' },
    { value: 'Others', label: 'Others' },
]

const OnboardingPage = () => {
    const [currentSection, setCurrentSection] = useState<string>(sections[0]);
    const [formData, setFormData] = useState<FormData>(emptyFormData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.section').forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

    useEffect(() => {

        document.getElementById(currentSection)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        document.body.addEventListener('scroll', () => {
            console.log(document.getElementById(currentSection)?.getBoundingClientRect().top);
        });
        // console.log('Added event listener');
    }, [currentSection]);



    function scrollToNextSection(event: MouseEvent<HTMLButtonElement>): void {
        // Scroll to the next section
        event.preventDefault();
        console.log(sections.indexOf(currentSection));
        let nextSectionIndex = sections.indexOf(currentSection) + 1;
        if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;
        const nextSection = sections[nextSectionIndex];
        document.getElementById(nextSection)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        setCurrentSection(nextSection);
    }

    function scrollToPreviousSection(event: MouseEvent<HTMLButtonElement>): void {
        // Scroll to the previous section
        event.preventDefault();
        console.log(sections.indexOf(currentSection));
        let previousSectionIndex = sections.indexOf(currentSection) - 1;
        if (previousSectionIndex < 0) previousSectionIndex = sections.length - 1;
        const previousSection = sections[previousSectionIndex];
        document.getElementById(previousSection)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        setCurrentSection(previousSection);
    }

    return (
        <div className=''>
            <ProgressBar currentSection={currentSection} sections={sections} />
            <NavigationButtons currentSection={currentSection} sections={sections} scrollToPreviousSection={scrollToPreviousSection} scrollToNextSection={scrollToNextSection} />

            <div className=' *:max-w-[800px] *:w-screen h-screen no-scrollbar scroll-smooth *:mx-auto *:h-screen snap-y snap-mandatory overflow-y-scroll'>


                {/* Welcome Section */}
                <section id={sections[0]} className='section flex flex-col items-center h-screen snap-start relative'>
                    <img src="./welcome.png" alt="logo" className='align-middle w-full' />
                    <h1 className='text-3xl md:text-4xl font-bold my-4 px-4'>Let&apos;s get you onboarded!</h1>
                    <p className='text-lg text-center w-[500px] max-w-[80%] leading-6'>Thank you for choosing our services, we are delighted to serve you. Here are somethings to know about the service before you share the details.
                        <Link href='#' className='ml-1 text-blue-500'>Click here to read more</Link>
                    </p>
                    <div className='flex flex-col text-center items-center justify-center w-[500px] max-w-[80%] mt-4'>
                        <span className='text-lg'>For queries regarding schedule, complaints or feedback</span>
                        <span>Tag <span className='text-blue-500'>Support@Pync</span> in the WhatsApp group.</span>
                        <br />
                        <span className='text-lg'>For queries regarding payments, referrals or waiver</span>
                        <span >Tag <span className='text-blue-500'>Payments@Pync</span> in the WhatsApp group.</span>
                    </div>
                </section>
                {/* Personal Details Section */}
                <section id={sections[1]} className='section flex flex-col gap-4 items-center md:items-start justify-center h-screen snap-start w-[500px] max-w-[80%] mx-auto pb-[100px]'>
                    <h1 className='text-3xl md:text-4xl font-bold my-4 px-4'>Personal Details</h1>

                    <ShortAnsInput htmlFor='name' label='Full Name' placeholder='Enter your name' value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} isRequired={true} />
                    <ContactInput htmlFor='phone' label='Phone Number' placeholder='Enter your phone number' value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} isRequired={true} />
                    <ShortAnsInput htmlFor='email' label='Email' placeholder='Enter your email' value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} isRequired={true} />
                    <ShortAnsInput htmlFor='flatNumber' label='Flat Number' placeholder='Enter your flat number' value={formData.flatNumber} onChange={(event) => setFormData({ ...formData, flatNumber: event.target.value })} isRequired={true} />
                    <SelectDropdownInput htmlFor='society' label='Society' name='society' id='society' options={societyOptions} isRequired={true} />

                </section>

                <section id={sections[2]} className='section flex flex-col gap-4 items-center md:items-start justify-center h-screen snap-start w-[500px] max-w-[80%] mx-auto pb-[100px]'>
                    {/* <h1 className='text-3xl md:text-4xl font-bold my-4 px-4'>Time Slot</h1> */}

                    <TimeInput htmlFor='time' label='Time Slot' isRequired={true} value={formData.time} onChange={(event) => setFormData({ ...formData, time: event.target.value })} />
                    {/* refferer */}
                    <ShortAnsInput htmlFor='refferer' label='Did someone refer us to you?' placeholder='Enter your refferer' value={formData.refferer} onChange={(event) => setFormData({ ...formData, refferer: event.target.value })} />
                    
                    <SingleChoiceInput htmlFor='numberOfVehicles' label='How many vehicles do you have?' isRequired={true} formData={formData} setFormData={setFormData} value={formData.numberOfVehicles} />
                </section>
            </div>
        </div>
    )
}

export default OnboardingPage;