import { FormField, TempObj } from '@/types/common'

/*
{
	"slug": "home",
	"slogan": "Inspired by living",
	"sloganSummary": "passion is the fual that drives us forward",
	"coverPhoto": {
    "dataUrl": "https://via.placeholder.com/600x200?text=Banner",
    "alt": "Team working together in modern office",
    "title": "Our collaborative workspace"
  }
*/



// copy from backend's enums
export const Pages = {
	HOME: 'home',
	ABOUT: 'about',
	CONTACT: 'contact',
	PORTFOLIO: 'portfolio',
	SERVICE: 'service',
} as const


export const formFields: TempObj<FormField> = {
  slug: {
    type: 'select',
    label: 'Select Page',
		options: Object.values(Pages).map( value => ({ label: `/${value}`, value })),
    // options: [
		// 	{ label: "Option One", value: "one" },
		// 	{ label: "Option Two", value: "two", disabled: true },
		// 	{ label: "Option Three", value: "three" },
    // ],
    helperText: '',
    required: true,
  },
  coverPhotoDataUrl: {
    label: 'Cover Photo',
    type: 'file',
    placeholder: 'page top hero image',
    required: true,
    helperText: '',
  },
  coverPhotoAlt: {
    label: 'Cover Photo Alt ',
    type: 'text',
    placeholder: 'Photo Alt text',
    required: true,
    helperText: '',
  },
  coverPhotoTitle: {
    label: 'Cover Photo Title',
    type: 'text',
    placeholder: 'Photo Alt title',
    required: true,
    helperText: '',
  },
  slogan: {
    type: 'text',
    required: true,
    label: 'Page Slogan',
    placeholder: 'Inspired by living',
    helperText: ''
  },
  sloganSummary: {
    type: 'textarea',
    required: true,
    label: 'Slogan Summary',
		placeholder: "passion is the fual that drives us forward",
    rows: 2,
    helperText: ''
  },
}
