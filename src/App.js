import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormFile,
  Table,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import Icon from '@mdi/react'
import {
  mdiPlus,
  mdiFileUploadOutline,
  mdiFileDownloadOutline,
  mdiPencil,
  mdiGithub,
} from '@mdi/js'
import XLSX from 'xlsx'

import tinymce from 'tinymce/tinymce' // eslint-disable-line no-unused-vars
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/help'
import { Editor } from '@tinymce/tinymce-react'

import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/skins/ui/oxide/content.inline.css'
import './App.css'

function isHTML(str) {
  const doc = new DOMParser().parseFromString(str, 'text/html')
  return Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
}

function VisualEditor(props) {
  return (
    <Editor
      init={{
        skin: false,
        //content_css:
        //  'https://cdn.jcu.edu.au/cookbook/2.0/css/cookbook.min.css,https://cdn.jcu.edu.au/cookbook/2.0/css/fonts.min.css',
        //content_css_cors: true,
        content_style: 'body { font-family: sans-serif; }',
        max_height: '20rem',
        autoresize_bottom_margin: 0,
        body_class: '',
        forced_root_block: '',
        force_br_newlines: false,
        force_p_newlines: false,
        menubar: false,
        statusbar: false,
        branding: false,
        plugins: [
          'autoresize',
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'searchreplace',
          'code',
          'fullscreen',
          'paste',
          'help',
        ],
        toolbar:
          'undo redo searchreplace | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | removeformat | code | help',
      }}
      {...props}
    />
  )
}

function App() {
  const [filename, setFilename] = useState(null)
  const [uploadedWorkbook, setUploadedWorkbook] = useState(null)
  const [sheet, setSheet] = useState([
    ['Key', 'Message'],
    ['', ''],
  ])
  const [rowMetadata, setRowMetadata] = useState({})

  window.onbeforeunload = () => true

  const handleFileUpload = e => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        const data = e.target.result
        const workbook = XLSX.read(data, {
          type: 'binary',
          raw: true,
          sheets: 0,
        })
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        setSheet(XLSX.utils.sheet_to_json(worksheet, { raw: true, header: 1 }))
        setUploadedWorkbook(workbook)
        setFilename(file.name)
        setRowMetadata({})
      }
      reader.readAsBinaryString(file)
    }
  }
  const updateCell = (row, column, value) => {
    setSheet(prevState => {
      const newState = [...prevState]
      newState[row][column] = value
      return newState
    })
    if (isHTML(value)) {
      enableVisualEditor(row)
    }
  }

  const enableVisualEditor = row => {
    setRowMetadata(prevState => ({
      ...prevState,
      [row]: { html: true },
    }))
  }

  const downloadSheet = type => {
    const worksheet = XLSX.utils.aoa_to_sheet(sheet)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      uploadedWorkbook ? uploadedWorkbook.SheetNames[0] : 'language'
    )
    XLSX.writeFile(
      workbook,
      `${filename ? filename.replace(/\.[^/.]+$/, '') : 'language'}.${type}`
    )
  }
  return (
    <div className="App">
      <Container fluid>
        <Row
          as="header"
          className="fixed-top mb-3 p-1 justify-content-between align-items-center border-bottom bg-white shadow"
        >
          <Col xs={{ span: 'auto', order: 3 }} lg={{ span: 'auto', order: 1 }}>
            <Button
              variant="outline-secondary"
              onClick={() => {
                setSheet(prevState => {
                  return [...prevState, ['', '']]
                })
              }}
            >
              <Icon path={mdiPlus} title="Add" size={1} className="mr-1" />
              Add row
            </Button>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            lg={{ span: 'auto', order: 1 }}
            className="text-center"
          >
            <h1 className="h6 mb-lg-0">
              <span className="font-weight-bold">Visual Language Editor</span>
              {filename && (
                <>
                  : <code>{filename}</code>
                </>
              )}
            </h1>
          </Col>
          <Col
            xs={{ span: 'auto', order: 2 }}
            lg={{ span: 'auto', order: 3 }}
            className="mb-1 mb-lg-0"
          >
            <FormFile className="d-inline-block">
              <FormFile.Label htmlFor="fileUpload">
                <span className="btn btn-primary">
                  <Icon
                    path={mdiFileUploadOutline}
                    title="Upload"
                    size={1}
                    className="mr-1"
                  />
                  Upload spreadsheet
                </span>
              </FormFile.Label>
              <FormFile.Input
                className="d-none"
                id="fileUpload"
                onChange={handleFileUpload}
                accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              />
            </FormFile>{' '}
            <DropdownButton
              className="d-inline-block"
              variant="outline-success"
              title={
                <>
                  <Icon
                    path={mdiFileDownloadOutline}
                    title="Download"
                    size={1}
                    className="mr-1"
                  />
                  Download
                </>
              }
            >
              <Dropdown.Item onClick={() => downloadSheet('xlsx')}>
                Excel 2007 (.xlsx)
              </Dropdown.Item>
              <Dropdown.Item onClick={() => downloadSheet('csv')}>
                CSV (.csv)
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row as="main" className="mt-5 mb-3">
          <Col>
            <Table striped bordered>
              <thead>
                <tr>
                  <th style={{ width: '1%' }}>Row</th>
                  <th className="w-25">{sheet[0][0]}</th>
                  <th>{sheet[0][1]}</th>
                </tr>
              </thead>
              <tbody>
                {sheet &&
                  sheet.slice(1).map((row, rowIndex) => {
                    const sheetRowIndex = rowIndex + 1
                    return (
                      <tr key={sheetRowIndex}>
                        <td className="text-center">
                          <code>{sheetRowIndex}</code>
                        </td>
                        <td>
                          <Form.Control
                            className="position-sticky"
                            type="text"
                            placeholder={sheet[0][0]}
                            value={row[0]}
                            onChange={e =>
                              updateCell(sheetRowIndex, 0, e.target.value)
                            }
                          />
                        </td>
                        <td>
                          {rowMetadata &&
                          rowMetadata[sheetRowIndex] &&
                          rowMetadata[sheetRowIndex].html ? (
                            <VisualEditor
                              value={row[1]}
                              onEditorChange={content =>
                                updateCell(sheetRowIndex, 1, content)
                              }
                            />
                          ) : (
                            <Form.Row>
                              <Col>
                                <Form.Control
                                  type="text"
                                  placeholder={sheet[0][1]}
                                  value={row[1]}
                                  onChange={e =>
                                    updateCell(sheetRowIndex, 1, e.target.value)
                                  }
                                  onFocus={() =>
                                    isHTML(row[1]) &&
                                    enableVisualEditor(sheetRowIndex)
                                  }
                                />
                              </Col>
                              <Col xs="auto">
                                <Button
                                  variant="outline-primary"
                                  onClick={() =>
                                    enableVisualEditor(sheetRowIndex)
                                  }
                                >
                                  <Icon
                                    path={mdiPencil}
                                    title="Edit"
                                    size={1}
                                    className="mr-1"
                                  />
                                  HTML
                                </Button>
                              </Col>
                            </Form.Row>
                          )}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row as="footer" className="pt-3 border-top">
          <Col className="text-center text-muted">
            <ul class="list-inline">
              <li class="list-inline-item mr-2 pr-2 border-right">
                Made by the{' '}
                <a href="https://github.com/jcu-eresearch">
                  JCU eResearch Centre
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/jcu-eresearch/redbox-language-editor">
                  <Icon
                    path={mdiGithub}
                    title="GitHub"
                    size={1}
                    className="mr-1"
                  />
                  Source code
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
