
export const SpinnerLoader = () => (
	<div className="flex h-screen w-full items-center justify-center bg-white">
		<div className="flex flex-col items-center gap-4">
			<div className="h-16 w-16 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>
			<p className="text-lg font-medium text-red-700">Loading your space...</p>
		</div>
	</div>
)


export const SkeletonLoader = () => (
	<div className="p-4">
		<div className="h-12 w-64 animate-pulse rounded bg-red-100 mb-8"></div>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{[...Array(6)].map((_, i) => (
				<div key={i} className="h-64 animate-pulse rounded-lg bg-red-50"></div>
			))}
		</div>
	</div>
)


// // Skeleton
// export default function Loading() {
//   return (
//     <div className="p-4">
//       <div className="h-12 w-64 animate-pulse rounded bg-red-100 mb-8"></div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="h-64 animate-pulse rounded-lg bg-red-50"></div>
//         ))}
//       </div>
//     </div>
//   );
// }