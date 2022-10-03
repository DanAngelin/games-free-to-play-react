import React from 'react';
import classes from './Contact.module.css';
import Box from '../../components/UI/Box';
import Layout from '../../components/Layout/Layout';
import { BsGithub, BsLinkedin, BsMailbox2 } from 'react-icons/bs'

const Contact = () => {
  return (
    <Box>
        <Layout>
            <div className={classes.contact}>
                <a href='mailto:dan.angelin@hotmail.com' ><BsMailbox2 /></a>
                <a href='https://github.com/DanAngelin' target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href='https://www.linkedin.com/in/angelindan/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
            </div>
        </Layout>
    </Box>
  )
}

export default Contact