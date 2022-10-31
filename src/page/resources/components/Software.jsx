import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'
import { BiNote,BiLayer } from 'react-icons/bi'
import { AiOutlineCamera } from 'react-icons/ai'

const Software = () => {

    const listOfIdes = [
        {
            label: 'Android Studio',
            ulr: 'https://developer.android.com/studio'
        },
        {
            label: 'Netbeans',
            ulr: 'https://netbeans.org/downloads/8.0.2/'
        },
        {
            label: 'Code Blocks',
            ulr: 'http://www.codeblocks.org/downloads'
        },
        {
            label: 'Dev++',
            ulr: 'https://sourceforge.net/projects/orwelldevcpp/'
        },
        {
            label: 'Sublime',
            ulr: 'https://www.sublimetext.com/download'
        },
        {
            label: 'Visual Studio',
            ulr: 'https://visualstudio.microsoft.com/downloads/'
        },
        {
            label: 'Visual Studio Code',
            ulr: 'https://code.visualstudio.com/download'
        },
    ]
    const listOfDesignerTools = [
        {
            label: 'Adode Photoshop',
            ulr: 'https://www.adobe.com/products/photoshop/free-trial-download.html'
        },
        {
            label: 'Adobe Premier',
            ulr: 'https://www.adobe.com/products/premiere/free-trial-download.html'
        },
        {
            label: 'Coral Draw',
            ulr: 'https://www.coreldraw.com/en/pages/free-download/'
        },
        {
            label: 'InVision',
            ulr: 'https://www.invisionapp.com/studio'
        },
    ]
    const listOfDbs = [
        {
            label: 'MySQL',
            ulr: 'https://dev.mysql.com/downloads/'
        },
        {
            label: 'Xampp Server',
            ulr: 'https://www.apachefriends.org/download.html'
        },
        {
            label: 'Web Server for Chrome',
            ulr: 'https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-app-launcher-info-dialog'
        },
    ]

    return (
        <Row className='m-2'>
            <Col md={'6'} sm={'12'} xs={'12'} lg={'4'} className={'mt-2'}>
                <Card className='shadow  border-0'>
                    <div className="support-info">
                        <div className="info-title">
                            <BiNote style={{ fontSize: '2rem', color: '#fc2626' }} />
                            {'IDEs/Text Editors '}
                        </div>
                    </div>
                    <div className="software-list">
                        <ul>
                            {listOfIdes.map(({ label, ulr }) => {
                                return <li key={label}>
                                    <a target="_blank" rel="noreferrer" href={ulr}>
                                        {label}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </Card>
            </Col>
            {/* Designers */}
            <Col md={'6'} sm={'12'} xs={'12'} lg={'4'} className={'mt-2'}>
                <Card className='shadow  border-0'>
                    <div className="support-info">
                        <div className="info-title">
                            <AiOutlineCamera style={{ fontSize: '2rem', color: '#fc2626' }} />
                            {'IDEs/Text Editors '}
                        </div>
                    </div>
                    <div className="software-list">
                        <ul>
                            {listOfDesignerTools.map(({ label, ulr }) => {
                                return <li key={label}>
                                    <a target="_blank" rel="noreferrer" href={ulr}>
                                        {label}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </Card>
            </Col>
            {/* Databases */}
            <Col md={'6'} sm={'12'} xs={'12'} lg={'4'} className={'mt-2'}>
                <Card className='shadow  border-0'>
                    <div className="support-info">
                        <div className="info-title">
                            <BiLayer style={{ fontSize: '2rem', color: '#fc2626' }} />
                            {'Database/Servers '}
                        </div>
                    </div>
                    <div className="software-list">
                        <ul>
                            {listOfDbs.map(({ label, ulr }) => {
                                return <li key={label}>
                                    <a target="_blank" rel="noreferrer" href={ulr}>
                                        {label}
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>
                </Card>
            </Col>

        </Row>
    )
}

export default Software