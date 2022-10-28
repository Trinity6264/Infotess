import React from 'react'
import './PageStyle.css'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineDoubleRight, AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const PageHeader = ({ pageTitle, page, currentPage, hasCurrentPage }) => {
    return (
        <div className='page-header '>
            <Container>
                <Row className='align-items-center justify-content-between '>
                    <Col md='6' sm='6' lg='6' xs='8'>
                        <div className="breadcrumb">
                            <Link to="/" style={{ textDecoration: 'none', display: 'flex',alignItems:'center', gap:'5px' }}>
                                <AiOutlineHome /> <span> Home</span>
                            </Link>
                            <span className="crumbs-spacer">
                                <AiOutlineDoubleRight />
                            </span>
                            <span className="current">{page}</span>
                            {
                                hasCurrentPage && <>
                                    <span className="crumbs-spacer">
                                        <AiOutlineDoubleRight />
                                    </span><span className="current">{currentPage}</span>
                                </>
                            }
                        </div>
                    </Col>
                    <Col md='6' sm='6' lg='2' xs='4'>
                        <h2 className="entry-title">{pageTitle}</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageHeader