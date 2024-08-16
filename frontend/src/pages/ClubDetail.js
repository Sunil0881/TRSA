import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const clubsData = [
    {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/andaman-logo.jpeg', // Replace with your logo URL
        stateName: 'Andaman Nicobar',
        clubName: 'ANDHAMAN AND NICOBAR ROLLER SKATING ASSOCIATION', 
        location: ' Opp. Palika Palace Hotel, Anarkali Road, Delanipur, Port Blair 744102, Andhaman.',
        members: [
          {
            name: 'R. Devarajan',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/ANDHAMAN-PRESIDENT-1.jpeg',
            position: 'President',
          },
          {
            name: 'G. Ramesh',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/ANDHAMAN-SECRETARY.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'N. Ratha',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/ANDHAMAN-TREASURER-1.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/ap.jpg', // Replace with your logo URL
        stateName: 'Andhra Pradesh',
        clubName: 'ANDHRA PRADESH ROLLER SKATING ASSOCIATION', 
        location: '4-69-28/1, Lawsons Bay Colony, Visakhapatnam – 530017, Andhra ',
        members: [
          {
            name: 'J. Sudhakar Reddy',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/mr-sudhakar-reddy.jpeg',
            position: 'President',
          },
          {
            name: 'P. Thomassiah',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/P.-Thomasaaiah.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Anirban Pal',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2024/02/arunachal-logo.jpg', // Replace with your logo URL
        stateName: 'Arunachal Pradesh',
        clubName: 'ARUNACHAL PRADESH SKATING ASSOCIATION',
        location: '121 jabe x itanagar arunachal pradesh',
        members: [
          {
            name: 'Dr. Tayuk Sonam',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/ARUNACHAL-PRESIDENT.jpg',
            position: 'President',
          },
          {
            name: 'Banta Natung',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/ARUNACHAL-SECRETARY.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Dr. Lige Sora',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/ARUNACHAL-TREASURER.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        stateName: 'Gujarat',
        clubName: 'INDIA SKATE – GUJARAT*',
        location: 'Gujarat',
        members: [
          {
            name: 'RAHUL RANA',
            image: 'https://indiaskate.com/wp-content/uploads/2023/02/rahul.jpg',
            position: 'RSFI Coordinator',
          },
          {
            name: 'PIYUSH SHAH',
            image: 'https://indiaskate.com/wp-content/uploads/2023/02/650693E6-E9EB-41AC-B80A-48F3136D8270-Piyush-Shah.jpeg',
            position: 'Contact Person',
          },
          {
            name: 'INDERJIT',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'RSFI Coordinator',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        stateName: 'Assam',
        clubName: 'INDIA SKATE – ASSAM',
        location: ' No-62, Ashirbad Dental clinic, CID bus stop, Basistha road, Guwahati,pin-781028, Assam',
        members: [
          {
            name: 'Dr. Kakalee Barua Sharma',
            image: 'https://indiaskate.com/wp-content/uploads/2023/04/dr-kakalee-barua-sharma-1.jpg',
            position: 'President',
          },
          
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2021/11/stickey.png', // Replace with your logo URL
        stateName: 'Bihar*',
        clubName: 'INDIA SKATE – BIHAR',
        location: '1, Road no A/12 Alinagar Anisabad Patna 800002',
        members: [
          {
            name: 'ANUBHA SINHA',
            image: 'https://indiaskate.com/wp-content/uploads/2024/06/bihar1.jpg',
            position: 'President',
          },
          {
            name: 'Tatheer Zahra',
            image: 'https://indiaskate.com/wp-content/uploads/2023/11/tatheer-zahra.jpg',
            position: 'General Secretary',
          },
          {
            name: 'USHA RANI CA',
            image: 'https://indiaskate.com/wp-content/uploads/2024/06/bihar3.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chandigarh.jpg', // Replace with your logo URL
        stateName: 'Chandigarh',
        clubName: 'CHANDIGARH ROLLER SKATING ASSOCIATION',
        location: 'NO. 1215, SECTOR 34-C, CHANDIGARH – 160022',
        members: [
          {
            name: 'S JAGPAL SINGH',
            image: 'https://indiaskate.com/wp-content/uploads/2020/05/chandigarh-president.jpg',
            position: 'President',
          },
          
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/chattisgarh.jpg', // Replace with your logo URL
        stateName: 'Chattisgarh',
        clubName: 'CHATTISGARH ROLLER SKATING ASSOCIATION',
        location: 'No 176, GAYATRI MANDIR WARD, BEHIND OLD GURUDWARA, SANTRABADI, DURG 491001',
        members: [
          {
            name: 'MD Reddy',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/chattisgarh-president.jpg',
            position: 'President',
          },
          {
            name: 'Kishor Kumar Bhandari',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/cht-kishore-kumar-bandari.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Daljeet Singh Thind',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/chtt-Daljeeth.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/delhi.jpg', // Replace with your logo URL
        stateName: 'Delhi',
        clubName: 'DELHI SKATING ASSOCIATION',
        location: '26/3 Ashok Vihar, New Delhi-110052',
        members: [
          {
            name: 'Shri. Tulsi Ram Aggarwal',
            image: 'https://indiaskate.com/wp-content/uploads/2015/11/mr-agarwal.jpg',
            position: 'President',
          },
          {
            name: 'Adv. Rahul Sharma',
            image: 'https://indiaskate.com/wp-content/uploads/2021/09/adv-rahul.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Shri. Phoolchand Sonal',
            image: 'https://indiaskate.com/wp-content/uploads/2021/09/delhi-photo.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/goa.jpg', // Replace with your logo URL
        stateName: 'Goa',
        clubName: 'SKATING ASSOCIATION OF GOA',
        location: 'Manas Medical Store, Near Chowgule College, Fatorda, Margao – Goa',
        members: [
          {
            name: 'Milind Desai',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/goa-milind.jpg',
            position: 'President',
          },
          {
            name: 'Jose Mario Gomes',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/goa-jose.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Yasmin Khan',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/goa-yasmin.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/haryana.jpg', // Replace with your logo URL
        stateName: 'Haryana',
        clubName: 'HARYANA ROLLER SKATING ASSOCIATION',
        location: 'House No 67, Sector 7 ,Urban Estate, Kurukshetra -136118 Haryana',
        members: [
          {
            name: 'Dr. Amit Kumar Agaarwal I.A.S.',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/haryana-AMIT-KUMAR-AGRAWA.jpg',
            position: 'President',
          },
          {
            name: 'Jitendra Dhingra',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/haryana-JITENDRA-DHINGRA-copy.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Ajay Madan',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/HIMACHAL-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Himachal Pradesh',
        clubName: 'HIMACHAL SKATING ASSOCIATION',
        location: 'M/S Pavitra Packaging Village Gularwala PO & Tehsil Baddi Dt., Solam HP',
        members: [
          {
            name: 'Ravi Kumar',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/Ravikumar.jpg',
            position: 'President',
          },
          {
            name: 'Jatin Kumar',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Mithun Singh',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/jammu-kashmir.jpg', // Replace with your logo URL
        stateName: 'Jammu & Kashmir',
        clubName: 'JAMMU & KASHMIR ROLLER SKATING ASSOCIATION',
        location: 'NO. 3, INDUSTRIAL ESTATE, DIGIANA JAMMU (180010)',
        members: [
          {
            name: 'MR. G.S. KHURMI',
            image: 'https://indiaskate.com/wp-content/uploads/2021/09/khurmi-ji-2.jpg',
            position: 'President',
          },
          {
            name: 'SMT. USHA ANAND',
            image: 'https://indiaskate.com/wp-content/uploads/2021/09/smt-usha.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/JHARKAND-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Jharkhand',
        clubName: 'ROLLER SKATING ASSOCIATION OF JHARKHAND',
        location: 'Kishor Ganj Road, New Kalawati Bhawan, Ranchi – 834001 (Jharkhand)',
        members: [
          {
            name: 'Vikash Singh',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/jharkhand-president.jpeg',
            position: 'President',
          },
          {
            name: 'Sumit Sharma',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Jay Prakash Gupta',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/jharkhand-treasurer.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/karnataka.jpg', // Replace with your logo URL
        stateName: 'Karnataka',
        clubName: 'KARNATAKA ROLLER SKATING ASSOCIATION',
        location: 'No.21, Asmi ,33rd cross 5th b block banagirinagar, bsk 3rd stage ,Bangalore- 560085',
        members: [
          {
            name: 'M. Lakshminarayana IAS',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/ka-lakshminarayana-ias.jpg',
            position: 'President',
          },
          {
            name: 'Indhudhar S',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/INDHUDHAR.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Lokeshwariah',
            image: 'https://indiaskate.com/wp-content/uploads/2022/09/lokeshwaraiah.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/kerala.jpg', // Replace with your logo URL
        stateName: 'Kerala',
        clubName: 'KERALA ROLLER SKATING ASSOCIATION',
        location: 'Lourdes Cottage”, T.C.26/510, SERA-52, Near Adhyapaka Bhavan, Trivandrum-695001',
        members: [
          {
            name: 'Abdul Salam A.M',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'Sebastian Prem Cyril',
            image: 'https://indiaskate.com/wp-content/uploads/2015/11/mr-prem-s.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'K.Sasidharan Nair',
            image: 'https://indiaskate.com/wp-content/uploads/2019/06/sasidharan.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2024/02/ladakh-logo-1.jpg', // Replace with your logo URL
        stateName: 'Ladakh',
        clubName: 'LADAKH ROLLER SKATING ASSOCIATION',
        location: 'Sonam Rinchen Bhagya, maymaypa, District – leh Ladakh, Pin code= 19410',
        members: [
          {
            name: 'SONAM BHAGYA',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/LADAKH-PRESIDENT.jpg',
            position: 'President',
          },
          {
            name: 'STANZIN DAWA',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/ladakh-secretary.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'TARGAIS',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/madhyapradesh.jpg', // Replace with your logo URL
        stateName: 'Madhya Pradesh',
        clubName: 'ROLLER SKATE DEVELOPMENT ASSOCIATION MADHYA PRADESH',
        location: '101, ARPIT APARTMENT, 3A, JANKINAGAR MAIN, INDORE – 452001',
        members: [
          {
            name: 'President Name',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'President',
          },
          {
            name: 'Ramesh Nagda',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/RAMESH-NAGDA.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Alok Tripathi',
            image: 'https://indiaskate.com/wp-content/uploads/2023/04/alok.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/maharashtra.jpg', // Replace with your logo URL
        stateName: 'Maharashtra',
        clubName: 'SKATING ASSOCIATION OF MAHARASHTRA',
        location: '12/201, Lotus Housing Complex, New Link Road, Oshiwara, Andheri (West), Mumbai – 400053',
        members: [
          {
            name: 'Prof. P.K. Singh',
            image: 'https://indiaskate.com/wp-content/uploads/2019/02/1.jpg',
            position: 'President',
          },
          {
            name: 'Rajendra Surendra Joshi',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/MH-SECRETARY.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Treasurer',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/MANIPUR-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Manipur',
        clubName: 'MANIPUR EXTREME SPORTS AND SKATE ASSOCIATION',
        location: 'Singjamei Chingamakha, Imphal West (Manipur) – 795001',
        members: [
          {
            name: 'Lt. col. Loitongbam Sanaajaoba Singh (retd.)',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/manipur-president-1.jpeg',
            position: 'President',
          },
          {
            name: 'Sri. Irom Umananda Mangang',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/manipursecretary.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Surjit Singh',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/pondy.jpg', // Replace with your logo URL
        stateName: 'Pondicherry',
        clubName: 'PONDICHERRY ROLLER SKATING ASSOCIATION',
        location: 'No 57, 14Th Cross Cutting, Anna Nagar Main Road, Pondicherry – 605005',
        members: [
          {
            name: 'G. Sri Ram Prasad @ Rao',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/rao-photo.jpg',
            position: 'President',
          },
          {
            name: 'Thomas',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/thomas.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Treasurer Name',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/ODISHA-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Odisha',
        clubName: 'Skating Association of Odisha',
        location: 'Sri Ram Nagar, Arundaya Nagar, Cuttack – 753012',
        members: [
          {
            name: 'Dhilip Turkey',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/Odisha-President.jpg',
            position: 'President',
          },
          {
            name: 'Satyajit Mohanty',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/Odisha-Secretary.jpg'
          },
          {
            name: 'Sonal Bajoria',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/odisha-treasurar.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/punjab.jpg', // Replace with your logo URL
        stateName: 'Punjab',
        clubName: 'PUNJAB ROLLER SKATING ASSOCIATION',
        location: '515/3, skating villa, twakli more, Patiala, Pin 147001',
        members: [
          {
            name: 'Manpreet Singh Chhatwal I.A.S.',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/manpreet-singh.jpg',
            position: 'President',
          },
          {
            name: 'Simranjit Singh Saggu',
            image: 'https://indiaskate.com/wp-content/uploads/2024/05/punjab-secretary-1.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Ram Singh',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/Ram-singh.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/RAJASTHAN-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Rajasthan',
        clubName: 'RAJASTHAN SKATE ASSOCIATION',
        location: 'RSA Kishan Katala, Phar Bazar Bikaner334002, Rajasthan.',
        members: [
          {
            name: 'Mhaveer Ranka',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/MHAVEER-RANKA.jpeg',
            position: 'President',
          },
          {
            name: 'Ghanshyam Meena',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/rajastan-secretary-2.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'CA Tarun Kachhawaha',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/rajastan-treasurer.jpeg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2024/02/sikkim-1.jpg', // Replace with your logo URL
        stateName: 'Sikkim',
        clubName: 'ALL SIKKIM SKATEBOARDING ASSOCIATION',
        location: '43/4 forest colony gangtok Sikkim 7371101',
        members: [
          {
            name: 'Tenzing Tsundu Bhutia',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/sikkim-president.jpg',
            position: 'President',
          },
          {
            name: 'Secretary',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Treasurer',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2021/11/logo-rect.png', // Replace with your logo URL
        stateName: 'Telegana',
        clubName: 'TELANGANA ROLLER SKATING ASSOCIATION*',
        location: 'No. 135 and 135, Bhagyanagar Colony, Hayathnagar Village and Mandal, Hayathnagar, Rangareddy, Telangana.',
        members: [
          {
            name: 'Macharla Raj Gopal',
            image: 'https://indiaskate.com/wp-content/uploads/2024/04/IMG-20240412-WA0067.jpg',
            position: 'President',
          },
          {
            name: 'M. Venkata Ramakrishna',
            image: 'https://indiaskate.com/wp-content/uploads/2024/04/IMG-20240412-WA0068.jpg',
            position: 'Gen. Secretary',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/tamilnadu.jpg', // Replace with your logo URL
        stateName: 'Tamil Nadu',
        clubName: 'TAMIL NADU ROLLER SKATING ASSOCIATION',
        location: 'No. 96,Pantheon Road,Egmore,Chennai- 600008',
        members: [
          {
            name: 'Dr. R. PRATAP KUMAR',
            image: 'https://indiaskate.com/wp-content/uploads/2022/08/R-PRATAP-KUMAR.jpg',
            position: 'President',
          },
          {
            name: 'A. SUDHAKARAN',
            image: 'https://indiaskate.com/wp-content/uploads/2022/08/a-sudhakaran.png',
            position: 'Gen. Secretary',
          },
          {
            name: 'S. RAJU',
            image: 'https://indiaskate.com/wp-content/uploads/2022/08/raju.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2020/03/uttar-pradesh.jpg', // Replace with your logo URL
        stateName: 'Uttar Pradesh',
        clubName: 'UTTAR PRADESH ROLLER SPORTS SANGH',
        location: '34/123, Sainik Vihar , Deori Road, SadarBazar , Agra Cantt, UP. 282001.',
        members: [
          {
            name: 'Rakesh Chandra',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/rakesh-ji.png',
            position: 'President',
          },
          {
            name: 'D S Rathore',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/photo-3.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Ajay Kumar Pant',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2022/01/UK-LOGO.jpeg', // Replace with your logo URL
        stateName: 'Uttarkhand',
        clubName: 'SKATES ASSOCIATION UTTARAKHAND',
        location: 'HN.166 GANGA NAGAR PAURI 246001 UK',
        members: [
          {
            name: 'Sanjeev Bhatnagar',
            image: 'https://indiaskate.com/wp-content/uploads/2024/07/3.jpg',
            position: 'President',
          },
          {
            name: 'Pradeep Negi',
            image: 'https://indiaskate.com/wp-content/uploads/2022/01/PRADEEP-SINGH-NEGI.jpeg',
            position: 'Gen. Secretary',
          },
          {
            name: 'Sanjay Kumar',
            image: 'https://indiaskate.com/wp-content/uploads/2020/04/team-placeholder-150x150.jpg',
            position: 'Treasurer',
          },
        ],
      },
      {
        logo: 'https://indiaskate.com/wp-content/uploads/2018/11/FAV.png', // Replace with your logo URL
        stateName: 'West Bengal',
        clubName: 'RSFI – WEST BENGAL*',
        location: 'Kolkata 700020',
        members: [
          {
            name: 'REKHA DAS',
            image: 'https://indiaskate.com/wp-content/uploads/2024/04/wb-president.jpg',
            position: 'President',
          },
          {
            name: 'KHUSHBOO KEJRIWAL',
            image: 'https://indiaskate.com/wp-content/uploads/2024/04/secretary-wp.jpg',
            position: 'Gen. Secretary',
          },
          {
            name: 'NEHAL POPAT',
            image: 'https://indiaskate.com/wp-content/uploads/2024/04/treasurer.jpg',
            position: 'Treasurer',
          },
        ],
      },
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
        <h1 className="text-blue-800 text-3xl font-semibold mb-4">{club.clubName}</h1>
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
