import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuyerPosts, getAllSellerPosts } from '../actions/postActions';
import { Col, Container, Row, Table } from 'react-bootstrap'
import { NewModel } from "../componants/Modal/index"
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCategory, MdDelete, MdEdit, MdClearAll, MdLogin, MdSell, MdOutlineLocalMall } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { BsCash } from 'react-icons/bs'
import { Layout } from '../componants/layout';


const Posts = () => {
    const [pageTitle, setPageTitle] = useState("Buyer Posts");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBuyerPosts())
        dispatch(getAllSellerPosts())
    }, []);
    const sellerPosts = useSelector(state => state.sellerPosts.sellerPosts)
    const buyerPosts = useSelector(state => state.buyerPosts.buyerPosts)
    const [activePosts, setActivePosts] = useState(buyerPosts);
    // useEffect(() => {
    //     setActivePosts(buyerPosts)
    // }, [])
    
    let posts = []

    // All Posts on Click
    const allPosts = () => {
        setPageTitle("All Posts")
        posts = sellerPosts.concat(buyerPosts)
        setActivePosts(posts)
    }

    // Seller Posts on Click
    const seller = () => {
        setPageTitle("Seller Posts")
        setActivePosts(sellerPosts)
    }

    // Buyer Posts on Click
    const buyer = () => {
        setPageTitle("Buyer Posts")
        setActivePosts(buyerPosts)
    }

    // render posts
    const renderPosts = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    activePosts.length > 0 ?
                        activePosts.map((post, index) =>
                            <div key={index} style={{
                                width: '100%',
                                minHeight: '300px',
                                height: 'fit-content',
                                backgroundColor: '#ffca28',
                                margin: '10px 0px',
                                borderRadius: '10px',
                                padding: '10px',
                            }}>
                                <h2>
                                    {post.postTitle}
                                    <hr style={{ color: '#000', height: '5px' }} />
                                    <div>
                                        <p style={{ fontSize: '20px' }} >Description: {post.description}</p>
                                        <p style={{ fontSize: '20px' }} >Target Price: Rs {post.targetPrice}.00</p>
                                        <p style={{ fontSize: '20px' }} >Required Quantity: {post.quantityRequired}</p>

                                    </div>
                                    <hr style={{ color: '#000', height: '5px' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                        <p style={{ fontSize: '20px' }} >Contact Number: {post.mobileNo}</p>
                                        <p style={{ fontSize: '20px' }} >Location: {post.destination}</p>
                                        <p style={{ fontSize: '20px' }} >Payments: {post.paymentTerms}</p>
                                    </div>
                                </h2>
                            </div>
                        )
                        :
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
                            <h1>No Posts</h1>
                        </div>
                }
            </div>
        )
    }
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '50px' }} >
                            <h1>{pageTitle}</h1>
                            <div style={{ display: "inline-flex" }}>
                                <button className='form-control' style={{ margin: '0px 10px', height: "fit-content", width: "fit-content" }} onClick={() => allPosts()} ><MdOutlineLocalMall style={{ fontSize: '28px' }} /> All Posts</button>
                                <button className='form-control' style={{ margin: '0px 10px', height: "fit-content", width: "fit-content" }} onClick={() => seller()} ><MdSell style={{ fontSize: '28px' }} /> Seller Posts</button>
                                <button className='form-control' style={{ margin: '0px 10px', height: "fit-content", width: "fit-content" }} onClick={() => buyer()} ><BsCash style={{ fontSize: '28px' }} /> Buyer Posts</button>
                                <button className='form-control' style={{ margin: '0px 10px', height: "fit-content", width: "fit-content" }} ><MdLogin style={{ fontSize: '28px' }} /> Login</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderPosts(sellerPosts)}
                    </Col>
                </Row>
            </Container>
        </Layout>

    );
}

export default Posts;
