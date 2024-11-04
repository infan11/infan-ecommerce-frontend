import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useProduct from '../../Hooks/useProduct';
import GadgetCard from '../../Mobile/GadgetCard/GadgetCard';




const LaptopCategory = () => {
    const [gadgetProduct] = useProduct(null)
    const Gaming_Laptops = gadgetProduct.filter(item => item.product_category === "Gaming_Laptops")
    const Business_Laptops = gadgetProduct.filter(item => item.product_category === "Business_Laptops")
    const Ultrabooks = gadgetProduct.filter(item => item.product_category === "Ultrabooks")
    const TWO_in_ONE_Laptops = gadgetProduct.filter(item => item.product_category === "TWO_in_ONE_Laptops")
    const Chromebooks = gadgetProduct.filter(item => item.product_category === "Chromebooks")
    const MacBooks = gadgetProduct.filter(item => item.product_category === "MacBooks")
    const Student_Laptops = gadgetProduct.filter(item => item.product_category === "Student_Laptops")
    const Workstation_Laptops = gadgetProduct.filter(item => item.product_category === "Workstation_Laptops")
    const Budget_Laptops = gadgetProduct.filter(item => item.product_category === "Budget_Laptops")
    const High_Performance_Laptops = gadgetProduct.filter(item => item.product_category === "High_Performance_Laptops")
    
    return (
        <div>
            <SectionTitle heading={"MOBILES CATEGORY"} subHeading={"ITEMS"} />
            <div>
                <Tabs className={"text-center "}>
                    <TabList className={"mt-5"}>
                        <Tab>Gaming Laptops</Tab>
                        <Tab>Business Laptops</Tab>
                        <Tab>Ultrabooks</Tab>
                        <Tab>2 in 1 Laptops</Tab>
                        <Tab>Chromebooks</Tab>
                        <Tab> MacBooks</Tab>
                        <Tab>Student Laptops</Tab>
                        <Tab>Workstation Laptops</Tab>
                        <Tab>Budget Laptops</Tab>
                        <Tab>High Performance Laptops</Tab>
                        <Tab>LG</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Gaming_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Business_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                TWO_in_ONE_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Ultrabooks.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Chromebooks.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                MacBooks.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Student_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Workstation_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Budget_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                High_Performance_Laptops.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                  



                </Tabs>
            </div>
        </div>
    );
};

export default LaptopCategory;