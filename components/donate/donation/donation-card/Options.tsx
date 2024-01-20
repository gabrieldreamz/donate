type PropsType = {
  isAnonymousChecked: boolean;
  setIsAnonymousChecked: Function;
  isMthDonationChecked: boolean;
  setIsMthDonationChecked: Function;
};

export default function Options({
  isAnonymousChecked,
  setIsAnonymousChecked,
  isMthDonationChecked,
  setIsMthDonationChecked,
}: PropsType) {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={isAnonymousChecked}
            onChange={(e) => setIsAnonymousChecked(e.target.checked)}
          />
          <p className="text-sm font-medium text-dark/80">
            Make this an anonymous donation
          </p>
        </div>
        <p className="text-sm ml-6 text-gray-500">
          Your details won&apos;t be stored
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={isMthDonationChecked}
          onChange={(e) => setIsMthDonationChecked(e.target.checked)}
        />
        <p className="text-sm font-medium text-dark/80">
          Make this a monthly donation
        </p>
      </div>
    </div>
  );
}
