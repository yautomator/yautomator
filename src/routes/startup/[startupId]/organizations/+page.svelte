<script lang="ts">
	import selectedOrganization from '$lib/assets/images/select-organization.png';
</script>

<div class="flex flex-col items-center justify-center min-h-screen w-full text-gray-200 relative">
	<div class="flex flex-col items-center flex-1 justify-center w-full">
		<img src={selectedOrganization} alt="Organizations" class="w-[250px] mb-10" />
		<h2 class="text-3xl mb-3 font-extralight">Select an Organization to apply</h2>
		<p class="text-xs text-gray-400 mb-6 max-w-md text-center">
			Speed up your startup journey. Browse and choose an organization to view its details and
			apply.
		</p>
	</div>
	<div class="absolute bottom-10 left-0 w-full flex justify-center gap-2">
		<iconify-icon icon="mage:lock" width="20" height="20"></iconify-icon>
		<h4 class="text-xs flex items-center">Your startup data is secure and private</h4>
	</div>
</div>
