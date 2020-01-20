import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'



import Layout from '../components/layout'

import creaLogo from '../assets/images/logo_crea.svg'
import hdaaLogo from '../assets/images/logo-hdaa.gif'
import Affiliate from '../components/Affiliate';

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation($clientMutationId: String!, $fullName: String!, $email: String!, $message: String!) {
    createSubmission( input: {
      clientMutationId: $clientMutationId,
      fullName: $fullName,
      email: $email,
      message: $message
    } ) {
      success
      data
    }
  }
`

const HomeIndex = ({data}) => {
        
        const [fullNameValue, setFullNameValue] = useState('')
        const [emailValue, setEmailValue] = useState('')
        const [messageValue, setMessageValue] = useState('')


        return (
          
          <Layout>
            <Helmet
              title="KV Realty"
              meta={[
                { name: 'description', content: 'Contact' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            ></Helmet>


            <main id="contactPage">
              <section>
                <div className="inner" id="contactUs">
                    <h2>Contact Us</h2>
                    
                    <Mutation mutation={CONTACT_MUTATION}>
                      { (createSubmission, {loading, error, data}) => (

                     <>
                    <form id="contactForm" onSubmit={
                      async event => {
                        event.preventDefault()
                        createSubmission({
                          variables: {
                            clientMutationId: 'example',
                            fullName: fullNameValue,
                           
                            email: emailValue,
                            message: messageValue,
                          }
                        })
                      }
                    }>
                        <label for="fullName">
                            Your Name
                            <input type="text" name="fullName" placeholder="John Doe" value={fullNameValue} 
                              onChange={event => {setFullNameValue(event.target.value)}}
                            />
                        </label>
                        <label for="email">
                            Your Email
                            <input type="email" name="email" placeholder="abc@abc.com" value={emailValue}
                              onChange = {
                                event => {
                                  setEmailValue(event.target.value)
                                }
                              }
                            />
                        </label>
                        <label for="message">Message
                            <textarea name="message" onChange={event => {setMessageValue(event.target.value)}}>{messageValue}</textarea>
                        </label>
                        <button id="getInTouch" type="submit">Get in Touch</button>
                    </form>
                      <div style={{padding: '2rem'}}>
                        {loading && <p>loading...</p>}
                        {error && <p>An unknown error has occurred, please try again later</p>}
                        {data && <p>Message successfully sent!</p>}
                      </div>
                      </>
                     )}
                    </Mutation>
                    
                </div>
               </section>
            </main>
          </Layout>
          
        )
    
}

export default HomeIndex

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
        src
      }
    }
  }
`;

export const HEADSHOT_QUERY = graphql`
         query {
           imageOne: file(relativePath: { eq: "kv-headshot.jpg" }) {
             ...fluidImage
           },
           logo4:file(relativePath: { eq: "mainLogo.png" }) {
             ...fluidImage
           },
           logo5:file(relativePath: { eq: "RAHB-logo_hztrans_video.png" }) {
             ...fluidImage
           }

         }
       `