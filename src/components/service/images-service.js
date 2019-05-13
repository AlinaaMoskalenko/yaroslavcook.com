import { photos } from '../../photos/photos';

export default class ImagesService {
  imagesList = [
    {
      id:"_IMG_1701",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1702",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1703",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1704",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1705",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1706",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1707",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1708",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1709",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1710",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1711",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1712",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1713",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1714",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1715",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1716",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1717",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1718",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1719",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1720",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1721",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1722",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1723",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1724",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1725",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1726",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1727",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1728",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1729",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1730",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1731",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1732",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1733",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1734",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1735",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1736",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1737",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1738",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1739",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1740",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1741",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1742",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1743",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1744",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1745",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1746",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1747",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1748",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1749",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1750",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1751",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1752",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1753",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1754",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1755",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1756",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1757",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1758",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1759",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1760",
      url: "",
      name: "",
      description: ""
    },
    {
      id:"_IMG_1761",
      url: "",
      name: "",
      description: ""
    }
  ];

  images = this.imagesList.map((item, idx) => {
    item.url = photos[idx];
    return item;
  });
}