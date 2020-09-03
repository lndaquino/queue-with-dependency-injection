import 'reflect-metadata';
import 'dotenv/config'
import './providers'

import Queue from './lib/Queue'

Queue.process()