
import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useProduct from '../../Hooks/useProduct';
import GadgetCard from '../../Mobile/GadgetCard/GadgetCard';




const WatchCategory = () => {
    const [gadgetProduct] = useProduct(null)
    const Luxury_Watches = gadgetProduct.filter(item => item.product_category === "Luxury_Watches")
    const Smartwatches = gadgetProduct.filter(item => item.product_category === "Smartwatches")
    const Analog_Watches = gadgetProduct.filter(item => item.product_category === "Analog_Watches")
    const Digital_Watches = gadgetProduct.filter(item => item.product_category === "Digital_Watches")
    const Hybrid_Watches = gadgetProduct.filter(item => item.product_category === "Hybrid_Watches")
    const Dress_Watches = gadgetProduct.filter(item => item.product_category === "Dress_Watches")
    const Field_Watches = gadgetProduct.filter(item => item.product_category === "Field_Watches")
    const Pilot_Watches = gadgetProduct.filter(item => item.product_category === "Pilot_Watches")
    const Diving_Watches = gadgetProduct.filter(item => item.product_category === "Diving_Watches")
    const Chronograph_Watches = gadgetProduct.filter(item => item.product_category === "Chronograph_Watches")
    const Sports_Watches = gadgetProduct.filter(item => item.product_category === "Sports_Watches")
    const Minimalist_Watches = gadgetProduct.filter(item => item.product_category === "Minimalist_Watches")
    const Mechanical_Watches = gadgetProduct.filter(item => item.product_category === "Mechanical_Watches")
    const Automatic_Watches = gadgetProduct.filter(item => item.product_category === "Automatic_Watches")
    const Quartz_Watches = gadgetProduct.filter(item => item.product_category === "Quartz_Watches")
    
    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle heading={"WATCH CATEGORY"} subHeading={"ITEMS"} />
            <div>
                <Tabs className={"text-center "}>
                    <TabList className={"mt-5"}>
                        <Tab>Luxury_Watches</Tab>
                        <Tab>Smartwatches</Tab>
                        <Tab>Analog_Watches</Tab>
                        <Tab>Digital_Watches</Tab>
                        <Tab>Hybrid_Watches</Tab>
                        <Tab> Dress_Watches</Tab>
                        <Tab>Field_Watches</Tab>
                        <Tab>Pilot_Watches</Tab>
                        <Tab>Diving_Watches</Tab>
                        <Tab>Chronograph_Watches</Tab>
                        <Tab>Sports_Watches</Tab>
                        <Tab>Minimalist_Watches</Tab>
                        <Tab>Mechanical_Watches</Tab>
                        <Tab>Automatic_Watches</Tab>
                        <Tab>Quartz_Watches</Tab>

                    </TabList>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Luxury_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Smartwatches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Digital_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Analog_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Hybrid_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Dress_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Field_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Pilot_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Diving_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Chronograph_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Sports_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                                Minimalist_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                             Mechanical_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                             Automatic_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='max-w-7xl mt-10 mx-auto mb-8  px-4 md:px-10 grid  grid-cols-2  md:grid-cols-3 gap-2'>
                            {
                             Quartz_Watches.map(item => <GadgetCard key={item._id} item={item}></GadgetCard>)
                            }
                        </div>
                    </TabPanel>

                  



                </Tabs>
            </div>
        </div>
    );
};

export default WatchCategory;