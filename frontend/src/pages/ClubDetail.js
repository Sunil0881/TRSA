import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tdrsalogo from "../assets/TDRSALOGO.jpg";


const clubsData = [
    {
        // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/andaman-logo.jpeg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Rockers Speed Sketing Academy',
        clubName: 'Rockers Speed Sketing Academy', 
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/ap.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Sathya Speed Sketing Academy',
        clubName: 'Sathya Speed Sketing Academy', 
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2024/02/arunachal-logo.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'SS Academy',
        clubName: 'SS Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'U Can Do Sketing Academy',
        clubName: 'U Can Do Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'SNJ Sketing Academy',
        clubName: 'SNJ Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
          
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Thaisha Roller Sketing Academy',
        clubName: 'Thaisha Roller Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chandigarh.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Parthi Sketing Academy',
        clubName: 'Parthi Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
          
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chattisgarh.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Spunk',
        clubName: 'Spunk',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/delhi.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Anna Nagar Roller Sketing Academy',
        clubName: 'Anna Nagar Roller Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/goa.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Champions Roller Sketing Academy',
        clubName: 'Champions Roller Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/haryana.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'New India Club',
        clubName: 'New India Club',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2022/01/HIMACHAL-LOGO.jpeg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'ES Sketing Academy',
        clubName: 'ES Sketing Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        // logo: 'https://indiaskate.com/wp-content/uploads/2020/03/jammu-kashmir.jpg', // Replace with your logo URL
        logo: tdrsalogo,
        stateName: 'Success Spirits Academy',
        clubName: 'Success Spirits Academy',
        location: 'Thiruvallur',
        members: [
          {
            name: 'MR.XXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'SMT. XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Secretary',
          },
          {
            name: 'XXXX',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/JHARKAND-LOGO.jpeg', // Replace with your logo URL
      //   stateName: 'Jharkhand',
      //   clubName: 'ROLLER SKATING ASSOCIATION OF JHARKHAND',
      //   location: 'Kishor Ganj Road, New Kalawati Bhawan, Ranchi – 834001 (Jharkhand)',
      //   members: [
      //     {
      //       name: 'Vikash Singh',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/jharkhand-president.jpeg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Sumit Sharma',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Jay Prakash Gupta',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/jharkhand-treasurer.jpeg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/karnataka.jpg', // Replace with your logo URL
      //   stateName: 'Karnataka',
      //   clubName: 'KARNATAKA ROLLER SKATING ASSOCIATION',
      //   location: 'No.21, Asmi ,33rd cross 5th b block banagirinagar, bsk 3rd stage ,Bangalore- 560085',
      //   members: [
      //     {
      //       name: 'M. Lakshminarayana IAS',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/ka-lakshminarayana-ias.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Indhudhar S',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/INDHUDHAR.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Lokeshwariah',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/09/lokeshwaraiah.jpeg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/kerala.jpg', // Replace with your logo URL
      //   stateName: 'Kerala',
      //   clubName: 'KERALA ROLLER SKATING ASSOCIATION',
      //   location: 'Lourdes Cottage”, T.C.26/510, SERA-52, Near Adhyapaka Bhavan, Trivandrum-695001',
      //   members: [
      //     {
      //       name: 'Abdul Salam A.M',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Sebastian Prem Cyril',
      //       image: 'https://indiaskate.com/wp-content/uploads/2015/11/mr-prem-s.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'K.Sasidharan Nair',
      //       image: 'https://indiaskate.com/wp-content/uploads/2019/06/sasidharan.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2024/02/ladakh-logo-1.jpg', // Replace with your logo URL
      //   stateName: 'Ladakh',
      //   clubName: 'LADAKH ROLLER SKATING ASSOCIATION',
      //   location: 'Sonam Rinchen Bhagya, maymaypa, District – leh Ladakh, Pin code= 19410',
      //   members: [
      //     {
      //       name: 'SONAM BHAGYA',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/LADAKH-PRESIDENT.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'STANZIN DAWA',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/ladakh-secretary.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'TARGAIS',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/madhyapradesh.jpg', // Replace with your logo URL
      //   stateName: 'Madhya Pradesh',
      //   clubName: 'ROLLER SKATE DEVELOPMENT ASSOCIATION MADHYA PRADESH',
      //   location: '101, ARPIT APARTMENT, 3A, JANKINAGAR MAIN, INDORE – 452001',
      //   members: [
      //     {
      //       name: 'President Name',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Ramesh Nagda',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/RAMESH-NAGDA.jpeg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Alok Tripathi',
      //       image: 'https://indiaskate.com/wp-content/uploads/2023/04/alok.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/maharashtra.jpg', // Replace with your logo URL
      //   stateName: 'Maharashtra',
      //   clubName: 'SKATING ASSOCIATION OF MAHARASHTRA',
      //   location: '12/201, Lotus Housing Complex, New Link Road, Oshiwara, Andheri (West), Mumbai – 400053',
      //   members: [
      //     {
      //       name: 'Prof. P.K. Singh',
      //       image: 'https://indiaskate.com/wp-content/uploads/2019/02/1.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Rajendra Surendra Joshi',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/MH-SECRETARY.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Treasurer',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/MANIPUR-LOGO.jpeg', // Replace with your logo URL
      //   stateName: 'Manipur',
      //   clubName: 'MANIPUR EXTREME SPORTS AND SKATE ASSOCIATION',
      //   location: 'Singjamei Chingamakha, Imphal West (Manipur) – 795001',
      //   members: [
      //     {
      //       name: 'Lt. col. Loitongbam Sanaajaoba Singh (retd.)',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/manipur-president-1.jpeg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Sri. Irom Umananda Mangang',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/manipursecretary.jpeg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Surjit Singh',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/pondy.jpg', // Replace with your logo URL
      //   stateName: 'Pondicherry',
      //   clubName: 'PONDICHERRY ROLLER SKATING ASSOCIATION',
      //   location: 'No 57, 14Th Cross Cutting, Anna Nagar Main Road, Pondicherry – 605005',
      //   members: [
      //     {
      //       name: 'G. Sri Ram Prasad @ Rao',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/rao-photo.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Thomas',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/thomas.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Treasurer Name',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/ODISHA-LOGO.jpeg', // Replace with your logo URL
      //   stateName: 'Odisha',
      //   clubName: 'Skating Association of Odisha',
      //   location: 'Sri Ram Nagar, Arundaya Nagar, Cuttack – 753012',
      //   members: [
      //     {
      //       name: 'Dhilip Turkey',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/Odisha-President.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Satyajit Mohanty',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/Odisha-Secretary.jpg'
      //     },
      //     {
      //       name: 'Sonal Bajoria',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/odisha-treasurar.jpeg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/punjab.jpg', // Replace with your logo URL
      //   stateName: 'Punjab',
      //   clubName: 'PUNJAB ROLLER SKATING ASSOCIATION',
      //   location: '515/3, skating villa, twakli more, Patiala, Pin 147001',
      //   members: [
      //     {
      //       name: 'Manpreet Singh Chhatwal I.A.S.',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/manpreet-singh.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Simranjit Singh Saggu',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/05/punjab-secretary-1.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Ram Singh',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/Ram-singh.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/RAJASTHAN-LOGO.jpeg', // Replace with your logo URL
      //   stateName: 'Rajasthan',
      //   clubName: 'RAJASTHAN SKATE ASSOCIATION',
      //   location: 'RSA Kishan Katala, Phar Bazar Bikaner334002, Rajasthan.',
      //   members: [
      //     {
      //       name: 'Mhaveer Ranka',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/MHAVEER-RANKA.jpeg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Ghanshyam Meena',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/rajastan-secretary-2.jpeg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'CA Tarun Kachhawaha',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/rajastan-treasurer.jpeg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2024/02/sikkim-1.jpg', // Replace with your logo URL
      //   stateName: 'Sikkim',
      //   clubName: 'ALL SIKKIM SKATEBOARDING ASSOCIATION',
      //   location: '43/4 forest colony gangtok Sikkim 7371101',
      //   members: [
      //     {
      //       name: 'Tenzing Tsundu Bhutia',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/sikkim-president.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Secretary',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Treasurer',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2021/11/logo-rect.png', // Replace with your logo URL
      //   stateName: 'Telegana',
      //   clubName: 'TELANGANA ROLLER SKATING ASSOCIATION*',
      //   location: 'No. 135 and 135, Bhagyanagar Colony, Hayathnagar Village and Mandal, Hayathnagar, Rangareddy, Telangana.',
      //   members: [
      //     {
      //       name: 'Macharla Raj Gopal',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/04/IMG-20240412-WA0067.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'M. Venkata Ramakrishna',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/04/IMG-20240412-WA0068.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/tamilnadu.jpg', // Replace with your logo URL
      //   stateName: 'Tamil Nadu',
      //   clubName: 'TAMIL NADU ROLLER SKATING ASSOCIATION',
      //   location: 'No. 96,Pantheon Road,Egmore,Chennai- 600008',
      //   members: [
      //     {
      //       name: 'Dr. R. PRATAP KUMAR',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/08/R-PRATAP-KUMAR.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'A. SUDHAKARAN',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/08/a-sudhakaran.png',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'S. RAJU',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/08/raju.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2020/03/uttar-pradesh.jpg', // Replace with your logo URL
      //   stateName: 'Uttar Pradesh',
      //   clubName: 'UTTAR PRADESH ROLLER SPORTS SANGH',
      //   location: '34/123, Sainik Vihar , Deori Road, SadarBazar , Agra Cantt, UP. 282001.',
      //   members: [
      //     {
      //       name: 'Rakesh Chandra',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/rakesh-ji.png',
      //       position: 'President',
      //     },
      //     {
      //       name: 'D S Rathore',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/photo-3.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Ajay Kumar Pant',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2022/01/UK-LOGO.jpeg', // Replace with your logo URL
      //   stateName: 'Uttarkhand',
      //   clubName: 'SKATES ASSOCIATION UTTARAKHAND',
      //   location: 'HN.166 GANGA NAGAR PAURI 246001 UK',
      //   members: [
      //     {
      //       name: 'Sanjeev Bhatnagar',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/07/3.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'Pradeep Negi',
      //       image: 'https://indiaskate.com/wp-content/uploads/2022/01/PRADEEP-SINGH-NEGI.jpeg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'Sanjay Kumar',
      //       image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
      // {
      //   logo: 'https://indiaskate.com/wp-content/uploads/2018/11/FAV.png', // Replace with your logo URL
      //   stateName: 'West Bengal',
      //   clubName: 'RSFI – WEST BENGAL*',
      //   location: 'Kolkata 700020',
      //   members: [
      //     {
      //       name: 'REKHA DAS',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/04/wb-president.jpg',
      //       position: 'President',
      //     },
      //     {
      //       name: 'KHUSHBOO KEJRIWAL',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/04/secretary-wp.jpg',
      //       position: 'Gen. Secretary',
      //     },
      //     {
      //       name: 'NEHAL POPAT',
      //       image: 'https://indiaskate.com/wp-content/uploads/2024/04/treasurer.jpg',
      //       position: 'Treasurer',
      //     },
      //   ],
      // },
];

const ClubDetail = () => {
  const { stateName } = useParams();

  // Find the club based on the stateName
  const club = clubsData.find(club => club.stateName.toLowerCase() === stateName.toLowerCase());

  // If no club is found, handle it (optional)
  if (!club) {
    return <div className="max-w-4xl mx-auto p-8">Club details not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <div className="p-8 max-w-4xl mx-auto text-center font-sans">
        <div className='flex justify-center'>
        <img src={club.logo} alt={`${club.stateName} logo`} className="w-36 h-36 rounded-full object-cover mb-4" />
        </div>
        <h1 className="text-blue-800 text-3xl font-semibold mb-4 text-transform: uppercase">{club.clubName}</h1>
        <p className="text-lg text-gray-600 mb-8">{club.location}</p>
        
        <h2 className="text-blue-800 text-2xl font-medium border-b-2 border-gray-200 pb-2 mb-8">Members</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
            {club.members.map((member, index) => (
                <div key={index} className=" w-60 text-center  p-4 bg-white rounded-lg shadow-lg">
                    <div className='flex justify-center'>
                    <img src={member.image} alt={`${member.name}`} className="w-24 h-24  rounded-full object-cover shadow-md mb-3" />
                    </div>
                    <h3 className="text-gray-800 text-lg font-medium mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-base">{member.position}</p>
                </div>
            ))}
        </div>
    </div>
    <Footer />
</div>


  );
};

export default ClubDetail;
