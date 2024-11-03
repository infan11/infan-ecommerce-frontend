import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useProduct from '../../Hooks/useProduct';
import ItemCard from './ItemCard/ItemCard';

const ItemCategory = () => {
  const [mensProduct] = useProduct(null)
  const Casual_Shirts = mensProduct.filter(item => item.product_category  === "Casual_Shirts") 
  const Formal_Shirts = mensProduct.filter(item => item.product_category  === "Formal_Shirts") 
  const Polo_Shirts = mensProduct.filter(item => item.product_category  === "Polo_Shirts") 
  const T_Shirts = mensProduct.filter(item => item.product_category  === "T_Shirts") 
  const Sweaters = mensProduct.filter(item => item.product_category  === "Sweaters") 
  const Hoodies_and_Sweatshirts = mensProduct.filter(item => item.product_category  === "Hoodies_and_Sweatshirts") 
  const Jackets_and_Coats = mensProduct.filter(item => item.product_category  === "Jackets_and_Coats") 
  const Blazers_and_Suits = mensProduct.filter(item => item.product_category  === "Blazers_and_Suits") 
  const Jeans = mensProduct.filter(item => item.product_category  === "Jeans") 
  const Chinos = mensProduct.filter(item => item.product_category  === "Chinos") 
    return (
        <div>
        <SectionTitle heading={"Mens Category"} subHeading={"ITEMS"}/>
        <div>
        <Tabs className={"text-center "}>
<TabList className={"mt-5"}>
  <Tab>Casual Shirts</Tab>
  <Tab>Formal Shirts</Tab>
  <Tab>Polo  Shirts</Tab>
  <Tab>T-Shirts</Tab>
  <Tab>Sweaters</Tab>
  <Tab>Hoodies & Sweatshirts</Tab>
  <Tab>Jackets & Coats</Tab>
  <Tab>Blazers & Suits</Tab>
  <Tab>Jeans</Tab>
  <Tab>Chinos</Tab>
  
</TabList>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Casual_Shirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
  Formal_Shirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Polo_Shirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    T_Shirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>
<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Sweaters.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Hoodies_and_Sweatshirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Jackets_and_Coats.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Casual_Shirts.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Blazers_and_Suits.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Jeans.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>

<TabPanel>
 <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
  {
    Chinos.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
  }
 </div>
</TabPanel>



</Tabs>
        </div>
    </div>
    );
};

export default ItemCategory;