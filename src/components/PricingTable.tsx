import { Table } from 'react-bootstrap';
import '../styles/PricingTable.css';

export default function PricingTable() {
  return (
    <section className="pricing-section">
      <div className="page-content">
        <h2 className="pricing-header">Pricing Table - DT Dental</h2>
        <h3 className="pricing-subheader">Service List</h3>
        
        <Table bordered hover responsive className="pricing-table">
          <thead>
            <tr>
              <th className="category-col">Category</th>
              <th className="service-col">Service Name</th>
              <th className="price-col">Price (VND)</th>
              <th className="notes-col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {/* Teeth Scaling */}
            <tr className="category-row">
              <td rowSpan={5} className="category-cell">TEETH SCALING</td>
              <td>Teeth Scaling (Level 1)</td>
              <td>200,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Teeth Scaling (Level 2)</td>
              <td>400,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Teeth Scaling (Level 3)</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Teeth Scaling (Level 4)</td>
              <td>700,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Teeth Scaling (Level 5)</td>
              <td>1,000,000</td>
              <td></td>
            </tr>

            {/* Periodontal */}
            <tr className="category-row">
              <td rowSpan={3} className="category-cell">PERIODONTAL</td>
              <td>Root planing</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Periodontal treatment (1 tooth)</td>
              <td>300,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Periodontal treatment (full mouth)</td>
              <td>700,000</td>
              <td></td>
            </tr>

            {/* Fillings */}
            <tr className="category-row">
              <td rowSpan={11} className="category-cell">FILLINGS</td>
              <td>Filling with GIC material</td>
              <td>300,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite I Filling (simple)</td>
              <td>400,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite I Filling (medium)</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite I Filling (complex)</td>
              <td>700,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite II, III Filling (simple)</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite II, III Filling (medium)</td>
              <td>650,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite II, III Filling (complex)</td>
              <td>800,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite IV Filling (simple)</td>
              <td>800,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite IV Filling (medium)</td>
              <td>1,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite IV Filling (complex)</td>
              <td>1,200,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Composite V Filling</td>
              <td>500,000</td>
              <td></td>
            </tr>

            {/* Teeth Whitening */}
            <tr className="category-row">
              <td rowSpan={3} className="category-cell">TEETH WHITENING</td>
              <td>In-office whitening</td>
              <td>3,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>At-home whitening kit</td>
              <td>4,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Tray making</td>
              <td>500,000</td>
              <td></td>
            </tr>

            {/* Endodontics */}
            <tr className="category-row">
              <td rowSpan={8} className="category-cell">ENDODONTICS (ROOT CANAL)</td>
              <td>Root canal - Incisor (simple)</td>
              <td>1,500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Incisor (medium)</td>
              <td>2,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Incisor (complex)</td>
              <td>2,500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Premolar (simple)</td>
              <td>2,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Premolar (medium)</td>
              <td>2,500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Premolar (complex)</td>
              <td>3,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Molar (simple)</td>
              <td>3,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Root canal - Molar (medium)</td>
              <td>3,500,000</td>
              <td></td>
            </tr>

            {/* Restoration */}
            <tr className="category-row">
              <td rowSpan={5} className="category-cell">RESTORATION</td>
              <td>Porcelain crown (Zirconia, E-MAX)</td>
              <td>6,000,000 - 12,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Titanium implant</td>
              <td>3,500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Veneer (simple)</td>
              <td>2,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Veneer (medium)</td>
              <td>3,000,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Full denture</td>
              <td>4,000,000</td>
              <td></td>
            </tr>

            {/* Minor Surgery */}
            <tr className="category-row">
              <td rowSpan={4} className="category-cell">MINOR SURGERY</td>
              <td>Simple extraction</td>
              <td>300,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Surgical extraction</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Wisdom tooth extraction (simple)</td>
              <td>500,000</td>
              <td></td>
            </tr>
            <tr>
              <td>Wisdom tooth extraction (complex)</td>
              <td>1,000,000</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}
