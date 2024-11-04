import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useProduct from '../../Hooks/useProduct';
import GadgetCard from '../../Mobile/GadgetCard/GadgetCard';




const PerfumeCategory = () => {
    const [gadgetProduct] = useProduct(null)
    const Eau_de_Parfum = gadgetProduct.filter(item => item.product_category === "Eau_de_Parfum")
    const Eau_de_Toilette = gadgetProduct.filter(item => item.product_category === "Eau_de_Toilette")
    const Eau_de_Cologne = gadgetProduct.filter(item => item.product_category === "Eau_de_Cologne")
    const Eau_Fraiche = gadgetProduct.filter(item => item.product_category === "Eau_Fraiche")
    const Perfume_Oil = gadgetProduct.filter(item => item.product_category === "Perfume_Oil")
    const Floral_Scents = gadgetProduct.filter(item => item.product_category === "Floral_Scents")
    const Oriental_Scents = gadgetProduct.filter(item => item.product_category === "Oriental_Scents")
    const Fresh_Citrus_Scents = gadgetProduct.filter(item => item.product_category === "Fresh_Citrus_Scents")
    const Gourmand_Scents = gadgetProduct.filter(item => item.product_category === "Gourmand_Scents")
    const Chypre_Scents = gadgetProduct.filter(item => item.product_category === "Chypre_Scents")
    const Spicy_Scents = gadgetProduct.filter(item => item.product_category === "Spicy_Scents")
    const Aromatic_Scents = gadgetProduct.filter(item => item.product_category === "Aromatic_Scents")
    const Mens_Perfumes = gadgetProduct.filter(item => item.product_category === "Mens_Perfumes")
    
    return (
        <div>
            <SectionTitle heading={"PERFUME CATEGORY"} subHeading={"ITEMS"} />
            <div>
                <Tabs className={"text-center "}>
                    <TabList className={"mt-5"}>
                        <Tab>Eau de Parfum (EDP)</Tab>
                        <Tab>Eau de Toilette (EDT)</Tab>
                        <Tab>Eau_de_Cologne</Tab>
                        <Tab>Eau Fraiche</Tab>
                        <Tab>Perfume_Oil</Tab>
                        <Tab> Floral_Scents</Tab>
                        <Tab>Gourmand Scents</Tab>
                        <Tab>Chypre Scents</Tab>
                        <Tab>Spicy_Scents</Tab>
                        <Tab>Aromatic_Scents</Tab>
                        <Tab>Mens_Perfumes</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Eau_de_Parfum.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Eau_de_Toilette.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Eau_Fraiche.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Eau_de_Cologne.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Perfume_Oil.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Floral_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Oriental_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Fresh_Citrus_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Gourmand_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Chypre_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Spicy_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Aromatic_Scents.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                             Mens_Perfumes.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                  



                </Tabs>
            </div>
        </div>
    );
};

export default PerfumeCategory;