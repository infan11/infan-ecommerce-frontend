import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from '../../Hooks/useProduct';
import BookItemCard from '../BookItemCard/BookItemCard';
import useBooksProduct from '../../Hooks/useBooksProduct';


const BookItem = () => {
  const [booksProduct] = useBooksProduct(null)
  const Quran_and_Tafsir = booksProduct.filter(item => item.product_category === "Quran_and_Tafsir")
  const Biography_of_Prophet = booksProduct.filter(item => item.product_category === "Biography_of_Prophet")

  const Hadith = booksProduct.filter(item => item.product_category === "Hadith")
  const Fiqh = booksProduct.filter(item => item.product_category === "Fiqh")
  const Aqidah = booksProduct.filter(item => item.product_category === "Aqidah")

  return (
    <div>
      <SectionTitle heading={"Mens Category"} subHeading={"ITEMS"} />
      <div>
        <Tabs className={"text-center "}>
          <TabList className={"mt-5"}>
            <Tab>Quran And Tafsir</Tab>
            <Tab>Biography of Prophet</Tab>
            <Tab>Hadith</Tab>
            <Tab>Fiqh</Tab>
            <Tab>Aqidah</Tab>


          </TabList>

          <TabPanel>
            <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
              {
                Quran_and_Tafsir.map(item => <BookItemCard key={item._id} item={item}></BookItemCard>)
              }
            </div>
          </TabPanel>

          <TabPanel>
            <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
              {
                Biography_of_Prophet.map(item => <BookItemCard key={item._id} item={item}></BookItemCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
              {
                Hadith.map(item => <BookItemCard key={item._id} item={item}></BookItemCard>)
              }
            </div>
          </TabPanel>

          <TabPanel>
            <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
              {
                Fiqh.map(item => <BookItemCard key={item._id} item={item}></BookItemCard>)
              }
            </div>
          </TabPanel>

          <TabPanel>
            <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
              {
                Aqidah.map(item => <BookItemCard key={item._id} item={item}></BookItemCard>)
              }
            </div>
          </TabPanel>




        </Tabs>
      </div>
    </div>
  );
};

export default BookItem;