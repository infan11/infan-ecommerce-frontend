import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useProduct from '../../Hooks/useProduct';
import GadgetCard from '../GadgetCard/GadgetCard';


const MobileCategory = () => {
    const [gadgetProduct] = useProduct(null)
    const Flagship_Phones = gadgetProduct.filter(item => item.product_category === "Flagship_Phones")
    const Mid_Range_Phones = gadgetProduct.filter(item => item.product_category === "Mid_Range_Phones")
    const Budget_Phones = gadgetProduct.filter(item => item.product_category === "Budget_Phones")
    const Gaming_Phones = gadgetProduct.filter(item => item.product_category === "Gaming_Phones")
    const Foldable_Phones = gadgetProduct.filter(item => item.product_category === "Foldable_Phones")
    const FIVE_G_Phones = gadgetProduct.filter(item => item.product_category === "FIVE_G_Phones")
    const Camera_Centric_Phones = gadgetProduct.filter(item => item.product_category === "Camera_Centric_Phones")
    const Battery_Centric_Phones = gadgetProduct.filter(item => item.product_category === "Battery_Centric_Phones")
    const Compact_Phones = gadgetProduct.filter(item => item.product_category === "Compact_Phones")
    const Rugged_Phones = gadgetProduct.filter(item => item.product_category === "Rugged_Phones")
    
    return (
        <div>
            <SectionTitle heading={"MOBILES CATEGORY"} subHeading={"ITEMS"} />
            <div>
                <Tabs className={"text-center "}>
                    <TabList className={"mt-5"}>
                        <Tab>Flagship_Phones</Tab>
                        <Tab>Mid_Range_Phones</Tab>
                        <Tab>Budget_Phones</Tab>
                        <Tab>Gaming_Phones</Tab>
                        <Tab>Foldable_Phones</Tab>
                        <Tab> 5G Phones</Tab>
                        <Tab>Camera_Centric_Phones</Tab>
                        <Tab>Battery_Centric_Phones</Tab>
                        <Tab>Compact_Phones</Tab>
                        <Tab>Rugged_Phones</Tab>
                        <Tab>LG</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Flagship_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Mid_Range_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Gaming_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Budget_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Foldable_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                FIVE_G_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Camera_Centric_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Battery_Centric_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Compact_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Rugged_Phones.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                  



                </Tabs>
            </div>
        </div>
    );
};

export default MobileCategory;