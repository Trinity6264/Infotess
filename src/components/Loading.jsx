import React from 'react'
import { Dna } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='loading-com' style={{
            minHeight: '80vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Dna
                visible={true}
                height="200"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Loading