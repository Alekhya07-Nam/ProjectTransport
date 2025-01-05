// avatar
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import { currency } from '@/context/constants';

// basic tables
const records = [{
  id: 1,
  name: 'Risa D. Pearson',
  phoneNo: '336-508-2157',
  dob: 'July 24, 1950',
  country: 'India',
  accountNo: 'AC336 508 2157',
  image: avatar2,
  cell: 'Cell',
  activeClass: 'table-active'
}, {
  id: 2,
  name: 'Ann C. Thompson',
  phoneNo: '646-473-2057',
  dob: 'January 25, 1959',
  country: 'USA',
  accountNo: 'SB646 473 2057',
  image: avatar3,
  cell: 'Cell'
}, {
  id: 3,
  name: 'Paul J. Friend',
  phoneNo: '281-308-0793',
  dob: 'September 1, 1939',
  country: 'Canada',
  accountNo: 'DL281 308 0793',
  image: avatar4,
  cell: 'Cell'
}, {
  id: 4,
  name: 'Linda G. Smith',
  phoneNo: '606-253-1207',
  dob: 'May 3, 1962',
  country: 'Brazil',
  accountNo: 'CA269 714 6825',
  image: avatar5,
  cell: 'Cell'
}];
const expandableRecords = [{
  product: 'ASOS Ridley High Waist',
  courier: 'FedEx',
  variant: 'success',
  now: 100,
  status: 'Delivered',
  price: `$${currency}9.49`,
  Quantity: '82',
  Amount: '6,518.18'
}, {
  product: 'Marco Lightweight Shirt',
  courier: 'DHL',
  variant: 'warning',
  now: 50,
  status: 'Shipped',
  price: `$${currency}28.50`,
  Quantity: '37',
  Amount: '4,754.50'
}, {
  product: 'Half Sleeve Shirt',
  courier: 'Bright',
  variant: 'info',
  now: 25,
  status: 'Order Received',
  price: `$${currency}9.99`,
  Quantity: '64',
  Amount: '2,559.36'
}, {
  product: 'Lightweight Jacket',
  courier: 'FedEx',
  variant: 'success',
  now: 100,
  status: 'Delivered',
  price: `$${currency}0.00`,
  Quantity: '184',
  Amount: '3,680.00'
}, {
  product: 'Cargo Pant & Shirt',
  courier: 'FedEx',
  variant: 'danger',
  now: 10,
  status: 'Payment Failed',
  price: `$${currency}8.49`,
  Quantity: '69',
  Amount: '1,965.81'
}, {
  product: 'ASOS Ridley High Waist',
  courier: 'FedEx',
  variant: 'danger',
  now: 10,
  status: 'Payment Failed',
  price: `$${currency}9.49`,
  Quantity: '82',
  Amount: '6,518.18'
}];
const nestedRecords = [{
  name: 'Risa D. Pearson',
  phoneNo: '336-508-2157',
  dob: 'July 24, 1950',
  country: 'india',
  children: [{
    name: 'Risa D. Pearson',
    phoneNo: '336-508-2157',
    dob: 'July 24, 1950',
    country: 'india'
  }, {
    name: 'Ann C. Thompson',
    phoneNo: '646-473-2057',
    dob: 'January 25, 1959',
    country: 'Canada'
  }]
}, {
  name: 'Linda G. Smith',
  phoneNo: '606-253-1207',
  dob: 'September 2, 1939',
  country: 'Belgium'
}];
const expandableDataRecords = [{
  id: 1,
  name: 'Airi Satou',
  position: 'Accountant',
  office: 'Tokyo',
  age: 33,
  startDate: '2008/11/28',
  salary: `${currency}162,700`
}, {
  id: 2,
  name: 'Angelica Ramos',
  position: 'Chief Executive Officer (CEO)',
  office: 'London',
  age: 47,
  startDate: '2009/10/09',
  salary: `${currency}1,200,000`
}, {
  id: 3,
  name: 'Ashton Cox',
  position: 'Junior Technical Author',
  office: 'San Francisco',
  age: 66,
  startDate: '2009/01/12',
  salary: `${currency}86,000`
}, {
  id: 4,
  name: 'Bradley Greer',
  position: 'Software Engineer',
  office: 'London',
  age: 41,
  startDate: '2012/10/13',
  salary: `${currency}132,000`
}, {
  id: 5,
  name: 'Brenden Wagner',
  position: 'Software Engineer',
  office: 'San Francisco',
  age: 28,
  startDate: '2011/06/07',
  salary: `${currency}206,850`
}, {
  id: 6,
  name: 'Brielle Williamson',
  position: 'Integration Specialist',
  office: 'New York',
  age: 61,
  startDate: '2012/12/02',
  salary: `${currency}372,000`
}, {
  id: 7,
  name: 'Bruno Nash',
  position: 'Software Engineer',
  office: 'London',
  age: 38,
  startDate: '2011/05/03',
  salary: `${currency}163,500`
}, {
  id: 8,
  name: 'Caesar Vance',
  position: 'Pre-Sales Support',
  office: 'New York',
  age: 21,
  startDate: '2011/12/12',
  salary: `${currency}106,450`
}, {
  id: 9,
  name: 'Cara Stevens',
  position: 'Sales Assistant',
  office: 'New York',
  age: 46,
  startDate: '2011/12/06',
  salary: `${currency}145,600`
}, {
  id: 10,
  name: 'Cedric Kelly',
  position: 'Senior Javascript Developer',
  office: 'Edinburgh',
  age: 22,
  startDate: '2012/03/29',
  salary: `${currency}433,060`
}, {
  id: 11,
  name: 'Airi Satou',
  position: 'Accountant',
  office: 'Tokyo',
  age: 33,
  startDate: '2008/11/28',
  salary: `${currency}162,700`
}, {
  id: 12,
  name: 'Angelica Ramos',
  position: 'Chief Executive Officer (CEO)',
  office: 'London',
  age: 47,
  startDate: '2009/10/09',
  salary: `${currency}1,200,000`
}, {
  id: 13,
  name: 'Ashton Cox',
  position: 'Junior Technical Author',
  office: 'San Francisco',
  age: 66,
  startDate: '2009/01/12',
  salary: `${currency}86,000`
}, {
  id: 14,
  name: 'Bradley Greer',
  position: 'Software Engineer',
  office: 'London',
  age: 41,
  startDate: '2012/10/13',
  salary: `${currency}132,000`
}, {
  id: 15,
  name: 'Brenden Wagner',
  position: 'Software Engineer',
  office: 'San Francisco',
  age: 28,
  startDate: '2011/06/07',
  salary: `${currency}206,850`
}, {
  id: 16,
  name: 'Brielle Williamson',
  position: 'Integration Specialist',
  office: 'New York',
  age: 61,
  startDate: '2012/12/02',
  salary: `${currency}372,000`
}, {
  id: 17,
  name: 'Bruno Nash',
  position: 'Software Engineer',
  office: 'London',
  age: 38,
  startDate: '2011/05/03',
  salary: `${currency}163,500`
}, {
  id: 18,
  name: 'Caesar Vance',
  position: 'Pre-Sales Support',
  office: 'New York',
  age: 21,
  startDate: '2011/12/12',
  salary: `${currency}106,450`
}, {
  id: 19,
  name: 'Cara Stevens',
  position: 'Sales Assistant',
  office: 'New York',
  age: 46,
  startDate: '2011/12/06',
  salary: `${currency}145,600`
}, {
  id: 20,
  name: 'Cedric Kelly',
  position: 'Senior Javascript Developer',
  office: 'Edinburgh',
  age: 22,
  startDate: '2012/03/29',
  salary: `${currency}433,060`
}];
const responsiveTableData = [{
  companyName: 'Google Inc.',
  lastTrade: 597.74,
  tradeTime: '12:12PM',
  change: '14.81 (2.54%)',
  prevClose: 582.93,
  open: 597.95,
  bid: '597.73 x 100',
  ask: '597.91 x 300',
  target: 731.1
}, {
  companyName: 'Apple Inc.',
  lastTrade: 378.94,
  tradeTime: '12:22PM',
  change: '5.74 (1.54%)',
  prevClose: 373.2,
  open: 381.02,
  bid: '378.92 x 300',
  ask: '378.99 x 100',
  target: 505.94
}, {
  companyName: 'Amazon.com Inc.',
  lastTrade: 191.55,
  tradeTime: '12:23PM',
  change: '3.16 (1.68%)',
  prevClose: 188.39,
  open: 194.99,
  bid: '191.52 x 300',
  ask: '191.58 x 100',
  target: 240.32
}, {
  companyName: 'Oracle Corporation',
  lastTrade: 31.15,
  tradeTime: '12:44PM',
  change: '1.41 (4.72%)',
  prevClose: 29.74,
  open: 30.67,
  bid: '31.14 x 6500',
  ask: '31.15 x 3200',
  target: 36.11
}, {
  companyName: 'Microsoft Corporation',
  lastTrade: 25.5,
  tradeTime: '12:27PM',
  change: '0.66 (2.67%)',
  prevClose: 24.84,
  open: 25.37,
  bid: '25.50 x 71100',
  ask: '25.51 x 17800',
  target: 31.5
}, {
  companyName: 'Cisco Systems, Inc.',
  lastTrade: 18.65,
  tradeTime: '12:45PM',
  change: '0.97 (5.49%)',
  prevClose: 17.68,
  open: 18.23,
  bid: '18.65 x 10300',
  ask: '18.66 x 24000',
  target: 21.12
}, {
  companyName: 'Yahoo! Inc.',
  lastTrade: 15.81,
  tradeTime: '12:25PM',
  change: '0.11 (0.67%)',
  prevClose: 15.7,
  open: 15.94,
  bid: '15.79 x 6100',
  ask: '15.80 x 17000',
  target: 18.16
}, {
  companyName: 'Amazon.com Inc.',
  lastTrade: 191.55,
  tradeTime: '12:23PM',
  change: '3.16 (1.68%)',
  prevClose: 188.39,
  open: 194.99,
  bid: '191.52 x 300',
  ask: '191.58 x 100',
  target: 240.32
}, {
  companyName: 'Oracle Corporation',
  lastTrade: 31.15,
  tradeTime: '12:44PM',
  change: '1.41 (4.72%)',
  prevClose: 29.74,
  open: 30.67,
  bid: '31.14 x 6500',
  ask: '31.15 x 3200',
  target: 36.11
}, {
  companyName: 'Microsoft Corporation',
  lastTrade: 25.5,
  tradeTime: '12:27PM',
  change: '0.66 (2.67%)',
  prevClose: 24.84,
  open: 25.37,
  bid: '25.50 x 71100',
  ask: '25.51 x 17800',
  target: 31.5
}, {
  companyName: 'Cisco Systems, Inc.',
  lastTrade: 18.65,
  tradeTime: '12:45PM',
  change: '0.97 (5.49%)',
  prevClose: 17.68,
  open: 18.23,
  bid: '18.65 x 10300',
  ask: '18.66 x 24000',
  target: 21.12
}, {
  companyName: 'Yahoo! Inc.',
  lastTrade: 15.81,
  tradeTime: '12:25PM',
  change: '0.11 (0.67%)',
  prevClose: 15.7,
  open: 15.94,
  bid: '15.79 x 6100',
  ask: '15.80 x 17000',
  target: 18.16
}, {
  companyName: 'Google Inc.',
  lastTrade: 597.74,
  tradeTime: '12:12PM',
  change: '14.81 (2.54%)',
  prevClose: 582.93,
  open: 597.95,
  bid: '597.73 x 100',
  ask: '597.91 x 300',
  target: 731.1
}, {
  companyName: 'Apple Inc.',
  lastTrade: 378.94,
  tradeTime: '12:22PM',
  change: '5.74 (1.54%)',
  prevClose: 373.2,
  open: 381.02,
  bid: '378.92 x 300',
  ask: '378.99 x 100',
  target: 505.94
}, {
  companyName: 'Amazon.com Inc.',
  lastTrade: 191.55,
  tradeTime: '12:23PM',
  change: '3.16 (1.68%)',
  prevClose: 188.39,
  open: 194.99,
  bid: '191.52 x 300',
  ask: '191.58 x 100',
  target: 240.32
}, {
  companyName: 'Oracle Corporation',
  lastTrade: 31.15,
  tradeTime: '12:44PM',
  change: '1.41 (4.72%)',
  prevClose: 29.74,
  open: 30.67,
  bid: '31.14 x 6500',
  ask: '31.15 x 3200',
  target: 36.11
}, {
  companyName: 'Microsoft Corporation',
  lastTrade: 25.5,
  tradeTime: '12:27PM',
  change: '0.66 (2.67%)',
  prevClose: 24.84,
  open: 25.37,
  bid: '25.50 x 71100',
  ask: '25.51 x 17800',
  target: 31.5
}, {
  companyName: 'Cisco Systems, Inc.',
  lastTrade: 18.65,
  tradeTime: '12:45PM',
  change: '0.97 (5.49%)',
  prevClose: 17.68,
  open: 18.23,
  bid: '18.65 x 10300',
  ask: '18.66 x 24000',
  target: 21.12
}, {
  companyName: 'Yahoo! Inc.',
  lastTrade: 15.81,
  tradeTime: '12:25PM',
  change: '0.11 (0.67%)',
  prevClose: 15.7,
  open: 15.94,
  bid: '15.79 x 6100',
  ask: '15.80 x 17000',
  target: 18.16
}];
export { expandableDataRecords, expandableRecords, nestedRecords, records, responsiveTableData };