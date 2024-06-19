import { HiArrowTrendingUp } from "react-icons/hi2";

interface truncateTextProps {
    message: string ;
};


export const inboxData = [
    {
        name: 'Makinde Ridwan',
        message: 'You managed to finish welldone!',
        image: '/images/testimonial1.png',
    },
    {
        name: 'Sarah PM',
        message: 'Thanks for your services. welldone!',
        image: '/images/testimonial2.png',
    },
    {
        name: 'Zion PM',
        message: 'Thank you',
        image: '/images/testimonial3.png',
    },
    {
        name: 'Zion PM',
        message: 'Thanks for your services. welldone!',
        image: '/images/testimonial3.png',
    },
];

export const truncateText = ({message}: truncateTextProps) => {
    if(message.length > 30) {
        message = message.substring(0, 23) + '...'
    };
    return message;
};

export const userProfileInfo = {
    name: 'AUSTIN ADEBAYO',
    email: 'austinadebayo@gmail.com',
    address: 'Banker, Nigeria',
    image: '/images/testimonial1.png',
};

export const dashboardData = [
    {
        title: 'Job Awarded',
        body: '20',
        textColor: '#000',
        bgColor: '#A29AFF',
    },
    {
        title: 'Success Rate',
        body: '70%',
        textColor: '#F5BD02',
        bgColor: '#FFF',
        icon: <HiArrowTrendingUp />
    },
    {
        title: 'Amount Spent',
        body: '5M',
        textColor: '#F5BD02',
        bgColor: '#FF46D6',
        icon: <HiArrowTrendingUp />
    },
    {
        title: 'Vendors Hired',
        body: '10',
        textColor: '#000',
        bgColor: '#FFC0FC',
    },
    {
        title: 'Favorite Vendor',
        body: 'Soji Ventures',
        textColor: '#F5BD02',
        bgColor: '#9BFFFC',
    },
    {
        title: 'Lowest Rating',
        body: '4.5',
        textColor: '#F5BD02',
        bgColor: '#FFF59E',
    },
];


export const transactionData = [
    {
        title: 'Soji Sadiku Ventures',
        date: '7/6/2023',
        amount: '-N300,000',
        event: 'Event Decorator/Design'
    },
    {
        title: 'You funded your Wallet',
        date: '2/6/2023',
        amount: '+N700,000',
    },
    {
        title: 'You funded your Wallet',
        date: '2/6/2023',
        amount: '+N700,000',
    },
    {
        title: 'Soji Sadiku Ventures',
        date: '7/6/2023',
        amount: '-N300,000',
        event: 'Event Decorator/Design'
    },
];