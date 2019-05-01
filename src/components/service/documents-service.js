import file_1 from '../../documents/reference_from_Carinthia_VII.pdf';
import file_2 from '../../documents/reference_from_Africa.pdf';
import file_3 from '../../documents/reference_from_La_Nouvelle_Etoile.pdf';

export default class DocumentService {
  fileList = [
    { name: 'Reference_from_Carinthia_VII', link: file_1, format: '.pdf' },
    { name: 'Reference_from_Africa', link: file_2, format: '.pdf' },
    { name: 'Reference_from_La_Nouvelle_Etoile', link: file_3, format: '.pdf' },
  ];
}