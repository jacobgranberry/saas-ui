import * as React from 'react'

import { render, testStories } from '@saas-ui/test-utils'
import * as stories from '../stories/button.stories'

testStories<typeof stories>(stories)
