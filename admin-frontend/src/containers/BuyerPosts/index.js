import React, { useEffect, useState } from 'react'
import { Layout } from '../../componants/layout'
import { Input } from '../../componants/UI/input/input'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NewModel } from '../../componants/Modal'
import { MdEdit, MdRemoveRedEye, MdDelete } from 'react-icons/md'
import { Alert, FormControlLabel, FormGroup, Switch } from '@mui/material'
import { deleteBuyerPost, getAllBuyerPosts, setPostStatus } from '../../actions/buyerPostAction'

const BuyerPosts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBuyerPosts())
    }, [])

    const [post, setPost] = useState(undefined);
    // Post Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const showPostDelModal = (post) => {
        setShowDeleteModal(true)
        setPost(post)
    }

    const deletePost = () => {
        const form = {
            id: post._id
        }
        dispatch(deleteBuyerPost(form))
        setShowDeleteModal(false)
    }
    const renderDelPostModal = () => {
        if (!post) {
            return null
        }
        else {
            return (
                <NewModel
                    show={showDeleteModal}
                    handleClose={() => deletePost()}
                    close={() => setShowDeleteModal(false)}
                    ModalTitle='Delete Post'
                    buttons={[
                        {
                            label: 'No',
                            color: 'primary',
                            onClick: () => setShowDeleteModal(false)
                        },
                        {
                            label: 'Yes',
                            color: 'danger',
                            onClick: () => deletePost()
                        }
                    ]}>
                    <h5>Do you want to delete this post?</h5>
                    <h3>{post && post.postTitle}</h3>
                </NewModel>
            )
        }
    }

    // Show Post Detail Modal

    const [showPostDetailModal, setShowPostDetailModal] = useState(false)
    const showPostDeteModal = (post) => {
        setShowPostDetailModal(true)
        setPost(post)
    }

    // Close Post Detail Modal
    const closePostDetailModal = () => {
        setShowPostDetailModal(false)
    }

    const renderPostDetailModal = () => {
        console.log(post)
        if (!post) {
            return null
        }
        else {
            return (
                <NewModel
                    show={showPostDetailModal}
                    handleClose={closePostDetailModal}
                    close={closePostDetailModal}
                    size='lg'
                    ModalTitle='Buyer Post Details'
                    buttons={[
                        {
                            label: 'Close',
                            color: 'primary',
                            onClick: closePostDetailModal
                        }
                    ]}>

                    <Row>
                        <Col md={6}>
                            <label className='key' >Buyer ID</label>
                            <p className='value'> {post.buyerId} </p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Post Title</label>
                            <p className='value'> LKR {post.postTitle} </p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Description</label>
                            <p className='value'> {post.description} </p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Target Price</label>
                            <p className='value'>{post.targetPrice}</p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Contact No</label>
                            <p className='value'>{post.mobileNo}</p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Required Quantity</label>
                            <p className='value'>{post.quantityRequired}</p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Status</label>
                            <p className='value'>{post.postStatus}</p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Suppliers From</label>
                            <p className='value'> {post.suppliersFrom} </p>
                        </Col>
                        <Col md={6}>
                            <label className='key' >Payment Terms</label>
                            <p className='value'>{post.paymentTerms}</p>
                        </Col>
                    </Row>

                </NewModel>
            )
        }
    }

    // check active status
    const isActive = (post) => {
        if (post.postStatus == "active") {
            return true
        }
        else {
            return false
        }
    }

    // update activitiy status
    const setActivityStatus = (post) => {
        if (post.postStatus == 'inactive') {
            const form = {
                id: post._id,
                status: 'active'
            }
            dispatch(setPostStatus(form))
        }
        else {
            const form = {
                id: post._id,
                status: 'inactive'
            }
            dispatch(setPostStatus(form))
        }
    }

    //render buyer post table
    const buyerPosts = useSelector(state => state.buyerPosts.buyerPosts)
    const renderBuyerPostTable = () => {
        return (
            <>
                {
                    buyerPosts.length > 0 ?
                        <Table style={{ fontSize: 14, alignItems: '' }} responsive="sm">
                            <thead>
                                <tr>
                                    <th style={{ verticalAlign: 'baseline' }}>#</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Buyer ID</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Post Title</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Description</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Target Price</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Contact No</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Status</th>
                                    <th style={{ verticalAlign: 'baseline' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyerPosts.length > 0 ?
                                        buyerPosts.map((post, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{post.buyerId}</td>
                                                <td>{post.postTitle}</td>
                                                <td>{post.description}</td>
                                                <td>{post.targetPrice}</td>
                                                <td>{post.mobileNo}</td>
                                                <td>{<FormGroup><FormControlLabel control={<Switch checked={isActive(post)} onClick={() => setActivityStatus(post)} />} /> </FormGroup>}</td>
                                                <td>
                                                    {
                                                        <h4>
                                                            <MdRemoveRedEye className='actionIcon' style={{ margin: '0 5px' }} onClick={() => showPostDeteModal(post)} />
                                                            <MdDelete className='actionIcon' style={{ margin: '0 5px' }} onClick={() => showPostDelModal(post)} />
                                                        </h4>
                                                    }
                                                </td>
                                            </tr>

                                        )
                                        : null
                                }

                            </tbody>
                        </Table>
                        :
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h1>No Posts</h1>
                        </div>
                }
            </>
        )
    }
    return (
        <Layout sidebar>
            {renderPostDetailModal()}
            {renderDelPostModal()}
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '50px' }} >
                            <h3>Buyer Posts</h3>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderBuyerPostTable()}
                    </Col>
                </Row>
            </Container>


        </Layout>
    );
}

export default BuyerPosts;
