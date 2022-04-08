/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import VideoUpload from '@visao/ckeditor5-video/src/videoupload.js';
import Video from '@visao/ckeditor5-video/src/video.js';
import VideoResize from '@visao/ckeditor5-video/src/videoresize.js';
import VideoToolbar from '@visao/ckeditor5-video/src/videotoolbar.js';
import VideoStyle from '@visao/ckeditor5-video/src/videostyle.js';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Alignment,
	Video,
	VideoToolbar,
	VideoUpload,
	VideoResize,
	VideoStyle,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'alignment',
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'videoUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
		],
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	video: {
		upload: {
			types: ['mp4'],
			allowMultipleFiles: false,
		},
		styles: ['alignLeft', 'alignCenter', 'alignRight'],

		// Configure the available video resize options.
		resizeOptions: [
			{
				name: 'videoResize:original',
				label: 'Original',
				icon: 'original',
			},
			{
				name: 'videoResize:50',
				label: '50',
				icon: 'medium',
			},
			{
				name: 'videoResize:75',
				label: '75',
				icon: 'large',
			},
		],

		// You need to configure the video toolbar, too, so it shows the new style
		// buttons as well as the resize buttons.
		toolbar: [
			'videoStyle:alignLeft',
			'videoStyle:alignCenter',
			'videoStyle:alignRight',
			'|',
			'videoResize:50',
			'videoResize:75',
			'videoResize:original',
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
