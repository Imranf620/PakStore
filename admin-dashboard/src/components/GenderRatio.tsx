
import { PieChart } from '@mui/x-charts/PieChart';

export default function GenderRatio() {
  return (
    <div className='flex w-full md:w-[40%] py-5 h-auto md:p-5 bg-white rounded-lg shadow flex-col justify-between items-center'>

    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Male' },
            { id: 1, value: 15, label: 'Female' },
          ],
        },
      ]}
      width={300}
      height={200}
    />
    </div>

  );
}